<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Checkout
      </h2>

      <validation-observer
        v-slot="{ handleSubmit, invalid }"
        ref="form"
      >
        <form
          class="row"
          @submit.prevent="handleSubmit(sendPayment)"
        >
          <div class="form-group col-12 col-md-6">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|numeric"
            >
              <base-input
                v-model="card.number"
                name="card_number"
                placeholder="card number"
                :is-valid="valid"
                :error="errors[0]"
                @keyup="getBrand($event.target.value)"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12 col-md-6">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required"
            >
              <base-select
                v-model="installment"
                name="installments"
                placeholder="Installments"
                :options="installmentsOptions"
                :is-valid="valid"
                :error="errors[0]"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|alpha_spaces"
            >
              <base-input
                v-model="card.name"
                name="card_name"
                placeholder="card name"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12 col-sm-4">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|digits:2|min_value:1|max_value:12"
            >
              <base-input
                v-model="card.month"
                name="card_month"
                placeholder="expiration Month"
                :is-valid="valid"
                :error="errors[0]"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12 col-sm-4">
            <validation-provider
              v-slot="{ errors, valid }"
              :rules="`required|digits:4|min_value:${new Date().getFullYear()}`"
            >
              <base-input
                v-model="card.year"
                name="card_year"
                placeholder="expiration year"
                :is-valid="valid"
                :error="errors[0]"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12 col-sm-4">
            <validation-provider
              v-slot="{ errors, valid }"
              :rules="`required|digits:${cardInfo.cvvSize || 4}`"
            >
              <base-input
                v-model="card.cvv"
                name="card_cvv"
                placeholder="security code"
                :is-valid="valid"
                :error="errors[0]"
              />
            </validation-provider>
          </div>

          <div class="form-group mx-auto">
            <button
              type="submit"
              class="btn-press"
              :disabled="sending || invalid"
            >
              Finalizar compra
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { mapGetters, mapActions } from 'vuex';
import BaseInput from '../../components/form/BaseInput';
import BaseSelect from '../../components/form/BaseSelect';

export default {
  middleware: 'auth',
  transition: 'slide-left',

  components: {
    BaseInput,
    BaseSelect,
    ValidationProvider,
    ValidationObserver
  },

  async fetch () {
    this.sessionId = (await this.$axios.$get('/checkout/sessionId')).sessionId;
  },

  data: () => ({
    sessionId: '',
    card: {
      number: '',
      name: '',
      month: '',
      year: '',
      cvv: ''
    },
    cardInfo: {},
    installments: [],
    installment: '1|0',
    sending: false
  }),

  computed: {
    installmentsOptions () {
      return this.installments.length
        ? this.installments.map(installment => ({
          id: `${installment.quantity}|${installment.installmentAmount}`,
          name: `${installment.quantity}x of ${installment.installmentAmount} - Total ${installment.totalAmount}`
        }))
        : [{ id: `1|${this.defaultTotal}`, name: `1x of ${this.defaultTotal} - Total ${this.defaultTotal}` }];
    },

    defaultTotal () {
      return this.cartProducts
        .reduce((sum, product) => (product.price * product.quantity) + sum, 0)
        .toFixed(2);
    },

    ...mapGetters({
      cartItems: 'cart/cartItems',
      cartProducts: 'cart/cartProducts'
    })
  },

  watch: {
    sessionId () {
      window.PagSeguroDirectPayment.setSessionId(this.sessionId);
    }
  },

  created () {
    this.installment = `1|${this.defaultTotal}`;
  },

  methods: {
    getBrand (value) {
      if (value.length >= 6) {
        window.PagSeguroDirectPayment.getBrand({
          cardBin: value.toString().substr(0, 6),

          success: (res) => {
            this.cardInfo = res.brand;
            this.getInstallments(this.defaultTotal, res.brand.name);
          },

          error: () => {
            this.$toast.error('Card number invalid');
          }
        });
      }
    },

    sendPayment () {
      this.sending = true;
      this.$nuxt.$loading.start();

      const closeSending = () => {
        this.sending = false;
        this.$nuxt.$loading.finish();
      };

      window.PagSeguroDirectPayment.createCardToken({
        cardNumber: this.card.number,
        brand: this.cardInfo.name,
        cvv: this.card.cvv,
        expirationMonth: this.card.month,
        expirationYear: this.card.year,

        success: async ({ card }) => {
          try {
            const response = await this.$axios.$post('/checkout/process', {
              token: card.token,
              hash: window.PagSeguroDirectPayment.getSenderHash(),
              installment: this.installment,
              name: this.card.name,
              cart: this.cartItems
            });

            this.clearCart();
            this.$toast.success(response.message);
            this.$router.push('/checkout/thanks');
          } catch (e) {
            console.log(e);
            this.$toast.error(e?.response?.data?.error?.message);
          }

          closeSending();
        },

        error: (e) => {
          console.log(e);
          closeSending();
        }
      });
    },

    getInstallments (amount, brand) {
      window.PagSeguroDirectPayment.getInstallments({
        amount,
        brand,
        maxInstallmentNoInterest: 0,

        success: (res) => {
          this.installments = res.installments[brand] || [];
        },

        error: () => {
          this.$toast.error('It was not possible to check installments methods, try again later');
        }
      });
    },

    ...mapActions({
      clearCart: 'cart/clearCart'
    })
  },

  head () {
    return {
      title: `Chekout | ${process.env.APP_NAME}`,
      script: [
        { src: 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js' }
      ]
    };
  }
};
</script>
