<template>
  <validation-observer v-slot="{ handleSubmit, invalid }">
    <form class="row" @submit.prevent="handleSubmit(onSubmit)">
      <div class="col-12 col-md-6">
        <h2 class="mid-title">
          Personal data
        </h2>

        <div class="row">
          <div class="form-group col-12">
            <validation-provider
              v-slot="{ errors, valid }"
              :rules="{
                required: true,
                alpha_spaces: true,
                min: 3,
                max: 255,
                regex: /(\w.+\s).+/i
              }"
            >
              <base-input
                v-model="account.name"
                name="name"
                placeholder="full name"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|email|max:255"
            >
              <base-input
                v-model="account.email"
                type="email"
                name="email"
                placeholder="E-mail"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|max:255"
            >
              <base-input
                v-model="account.phone"
                v-mask="phoneMask(account.phone)"
                name="phone"
                placeholder="phone"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-12">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|max:255|numeric"
            >
              <base-input
                v-model="account.cpf"
                v-mask="'###########'"
                name="cpf"
                placeholder="CPF"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>
        </div>

        <h2 class="mid-title mt-4">
          Security
        </h2>

        <div class="form-group">
          <validation-provider
            v-slot="{ errors, valid }"
            rules="required|min:8"
            vid="password"
          >
            <base-input
              v-model="account.password"
              type="password"
              name="password"
              placeholder="password"
              :error="errors[0]"
              :is-valid="valid"
            />
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider
            v-slot="{ errors, valid }"
            rules="required|min:8|confirmed:password"
          >
            <base-input
              v-model="account.password_confirmation"
              type="password"
              name="confirm_password"
              placeholder="comfirm your password"
              :error="errors[0]"
              :is-valid="valid"
            />
          </validation-provider>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <h2 class="mid-title mt-4 mt-md-0">
          Address
        </h2>

        <div class="row">
          <div class="form-group col-md-4">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|digits:8"
            >
              <base-input
                v-model="account.cep"
                v-mask="'########'"
                name="CEP"
                placeholder="CEP"
                :error="errors[0]"
                :is-valid="valid"
                @keyup="getAddress()"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-9 col-lg-8">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|max:255"
            >
              <base-input
                v-model="account.street"
                name="street"
                placeholder="street"
                readonly
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-3 col-lg-2">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|alpha_num|max:10"
            >
              <base-input
                v-model="account.number"
                name="number"
                placeholder="Nº"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-3 col-lg-2">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="alpha_num|max:10"
            >
              <base-input
                v-model="account.apto"
                name="apto"
                placeholder="Apto"
                muted="Optional"
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-8">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|max:255"
            >
              <base-input
                v-model="account.district"
                name="district"
                placeholder="district"
                readonly
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-9">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|max:255"
            >
              <base-input
                v-model="account.city"
                name="city"
                placeholder="city"
                readonly
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>

          <div class="form-group col-md-3">
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|length:2"
            >
              <base-input
                v-model="account.state"
                name="state"
                placeholder="state"
                readonly
                :error="errors[0]"
                :is-valid="valid"
              />
            </validation-provider>
          </div>
        </div>
      </div>

      <div class="col-12 my-4">
        <validation-provider
          v-slot="{ errors }"
          :rules="{ required: { allowFalse: false } }"
        >
          <base-checkbox
            v-model="isAgree"
            :error="errors[0]"
          >
            I have read and agree with the Privacy Policy
          </base-checkbox>
        </validation-provider>
      </div>

      <div class="col-12 d-flex justify-content-end">
        <div class="form-group">
          <button
            class="btn-press btn-large"
            type="submit"
            :disabled="sending || invalid"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import PhoneMask from '~/mixins/phoneMask';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  mixins: [PhoneMask],

  data: () => ({
    account: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      password: '',
      password_confirmation: '',
      street: '',
      district: '',
      state: '',
      number: '',
      apto: '',
      city: '',
      cep: '',
    },

    isAgree: false,
    sending: false,
  }),

  methods: {
    async getAddress () {
      if (this.account.cep.length !== 8) {
        this.account = {
          ...this.account,
          street: '',
          district: '',
          state: '',
          city: '',
        };
        return;
      };

      this.$nuxt.$loading.start();

      try {
        const address = await this.$axios.$get(`https://viacep.com.br/ws/${this.account.cep}/json/`);

        if (address.erro) {
          throw new Error(404);
        }

        this.account = {
          ...this.account,
          street: address.logradouro,
          district: address.bairro,
          state: address.uf,
          city: address.localidade,
        };
      } catch (e) {
        this.$toast.error(e.message ? 'Not found this CEP' : 'Something went wrong, try again later.');
      } finally {
        this.$nuxt.$loading.finish();
      }
    },

    async onSubmit () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        const { token } = await this.$axios.$post('/auth/register', this.account);

        this.$auth.setUserToken(token);
        this.$router.push('/');
        this.$toast.success('Successfull registered!');
      } catch (e) {
        this.$toast.error(e?.response?.data?.error?.message || e?.response?.data?.message);
      }

      this.sending = false;
      this.$nuxt.$loading.finish();
    },
  },
};
</script>
