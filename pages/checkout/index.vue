<template>
  <section id="page-content">
    <div class="container">
      <h1 class="page-title">
        Checkout
      </h1>

      <validation-observer
        v-slot="{ handleSubmit, invalid }"
        ref="form"
      >
        <form
          class="row align-items-start"
          @submit.prevent="handleSubmit(sendPayment)"
        >
          <div class="row col-12 col-lg-6">
            <div class="col-12">
              <h2 class="title">
                Card info
              </h2>
            </div>

            <div class="form-group col-12 col-md-6">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|digits:16"
              >
                <base-input
                  v-model="card.number"
                  v-mask="'################'"
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
                rules="required|digits:11"
              >
                <base-input
                  v-model="card.cpf"
                  v-mask="'###########'"
                  name="card_cpf"
                  placeholder="Holder CPF"
                  :is-valid="valid"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
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

            <div class="form-group col-12 col-md-8 col-lg-7">
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

            <div class="form-group col-12 col-md-4 col-lg-5">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|max:255"
              >
                <base-input
                  v-model="card.birthdate"
                  v-mask="'##/##/####'"
                  name="card_birthdate"
                  placeholder="holder birthdate"
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
                  v-mask="'##'"
                  name="card_month"
                  placeholder="month"
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
                  v-mask="'####'"
                  name="card_year"
                  placeholder="year"
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
                  v-mask="'#'.repeat(cardInfo.cvvSize || 4)"
                  name="card_cvv"
                  placeholder="cvv"
                  :is-valid="valid"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>
          </div>

          <div class="row col-12 col-lg-6">
            <div class="col-12">
              <h2 class="title">
                Address
              </h2>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                vid="sameAsRegister"
              >
                <base-checkout
                  v-model="sameAsRegister"
                  :error="errors[0]"
                >
                  Use same address of my register
                </base-checkout>
              </validation-provider>
            </div>

            <template v-if="!sameAsRegister">
              <div class="form-group col-md-4">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|digits:8"
                >
                  <base-input
                    v-model="card.address.cep"
                    v-mask="'########'"
                    name="CEP"
                    placeholder="CEP"
                    :error="errors[0]"
                    :is-valid="valid"
                    @keyup="getAddress()"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-9 col-md-8 col-lg-8">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|max:255"
                >
                  <base-input
                    v-model="card.address.street"
                    name="street"
                    placeholder="Rua"
                    readonly
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-3 col-md-3">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|alpha_num|max:10"
                >
                  <base-input
                    v-model="card.address.addressNumber"
                    name="number"
                    placeholder="Nº"
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-3 col-md-3">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="alpha_num|max:10"
                >
                  <base-input
                    v-model="card.address.apto"
                    name="apto"
                    placeholder="Apto"
                    muted="Optional"
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-9 col-md-6">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|max:255"
                >
                  <base-input
                    v-model="card.address.district"
                    name="district"
                    placeholder="Bairro"
                    readonly
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-md-9">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|max:255"
                >
                  <base-input
                    v-model="card.address.city"
                    name="city"
                    placeholder="Cidade"
                    readonly
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group col-md-3">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required_if:sameAsRegister,false|length:2"
                >
                  <base-input
                    v-model="card.address.state"
                    name="state"
                    placeholder="Estado"
                    readonly
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>
            </template>
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
import BaseCheckout from '../../components/form/BaseCheckout';

export default {
  middleware: ['auth', 'haveCart'],
  transition: 'slide-left',

  components: {
    BaseInput,
    BaseSelect,
    ValidationProvider,
    ValidationObserver,
    BaseCheckout
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
      cvv: '',
      address: {
        cep: '',
        street: '',
        district: '',
        state: '',
        city: '',
        addressNumber: '',
        apto: ''
      },
      cpf: '',
      birthdate: '',
      phone: ''
    },
    sameAsRegister: true,
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

    async getAddress () {
      if (this.card.address.cep.length !== 8) {
        this.card.address = {
          ...this.card.address,
          street: '',
          district: '',
          state: '',
          city: ''
        };
        return;
      };

      this.$nuxt.$loading.start();

      try {
        const instance = this.$axios.create();
        delete instance.defaults.headers.common.Authorization;
        const address = await instance.$get(`https://viacep.com.br/ws/${this.card.address.cep}/json/`);

        if (address.erro) {
          throw new Error(404);
        }

        this.card.address = {
          ...this.card.address,
          street: address.logradouro,
          district: address.bairro,
          state: address.uf,
          city: address.localidade
        };
      } catch (e) {
        this.$toast.error(e.message ? 'Not found this CEP' : 'Something is wrong, try again latter.');
      } finally {
        this.$nuxt.$loading.finish();
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
              cart: this.cartItems,
              birthdate: this.card.birthdate,
              cpf: this.card.cpf,
              sameAsRegister: this.sameAsRegister,
              cep: this.card.address.cep,
              number: this.card.address.addressNumber,
              apto: this.card.address.apto
            });

            this.clearCart();
            this.$toast.success(response.message);
            this.$router.push('/checkout/thanks');
          } catch (e) {
            this.$toast.error(e?.response?.data?.message || e?.response?.data?.error?.message);
            this.fetchProducts();
            this.$router.push('/cart');
          } finally {
            closeSending();
          }
        },

        error: (e) => {
          this.$toast.error(Object.values(e.errors)[0]);
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
      clearCart: 'cart/clearCart',
      fetchProducts: 'cart/fetchProducts'
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
