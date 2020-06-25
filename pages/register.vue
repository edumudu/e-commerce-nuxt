<template>
  <section id="page-content">
    <div class="container">
      <section class="row">
        <div class="col-12">
          <h2 class="page-title">
            Registrar conta
          </h2>
        </div>

        <div class="col-12 py-4">
          <validation-observer v-slot="{ handleSubmit, invalid }">
            <form class="row" @submit.prevent="handleSubmit(sendForm)">
              <div class="col-12 col-md-6">
                <h2 class="mid-title">
                  Dados pessoais
                </h2>

                <div class="row">
                  <div class="form-group col-md-6">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required|alpha|min:3|max:255"
                    >
                      <base-input
                        v-model="account.first_name"
                        name="first_name"
                        placeholder="Primeiro nome"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-6">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required|alpha|min:3|max:255"
                    >
                      <base-input
                        v-model="account.last_name"
                        name="last_name"
                        placeholder="Sobrenome"
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
                        v-mask="phoneMask"
                        name="phone"
                        placeholder="Telefone"
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
                  Senhas
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
                      placeholder="Senha"
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
                      placeholder="Confirme sua senha"
                      :error="errors[0]"
                      :is-valid="valid"
                    />
                  </validation-provider>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <h2 class="mid-title mt-4 mt-md-0">
                  Endereço
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
                        placeholder="Rua"
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
                      rules="required|max:255"
                    >
                      <base-input
                        v-model="account.city"
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
                      rules="required|length:2"
                    >
                      <base-input
                        v-model="account.state"
                        name="state"
                        placeholder="Estado"
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
                  <base-checkout
                    v-model="isAgree"
                    :error="errors[0]"
                  >
                    Li e concordo com a Política de Privacidade
                  </base-checkout>
                </validation-provider>
              </div>

              <div class="col-12 d-flex justify-content-end">
                <div class="form-group">
                  <input
                    class="btn-press btn-large"
                    type="submit"
                    :disabled="sending || invalid"
                  >
                </div>
              </div>
            </form>
          </validation-observer>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import BaseInput from '~/components/form/BaseInput.vue';
import BaseCheckout from '~/components/form/BaseCheckout.vue';

export default {
  middleware: 'auth',
  auth: 'guest',
  transition: 'slide-left',

  components: {
    BaseInput,
    ValidationProvider,
    ValidationObserver,
    BaseCheckout
  },

  data: () => ({
    account: {
      first_name: '',
      last_name: '',
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
      cep: ''
    },

    isAgree: false,
    sending: false
  }),

  computed: {
    phoneMask () {
      return this.account.phone.length <= 14 ? '(##) ####-####?#' : '(##) #####-####';
    }
  },

  methods: {
    async getAddress () {
      if (this.account.cep.length !== 8) {
        this.account = {
          ...this.account,
          street: '',
          district: '',
          state: '',
          city: ''
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
          city: address.localidade
        };
      } catch (e) {
        this.$toast.error(e.message ? 'Not found this CEP' : 'Something is wrong, try again latter.');
      } finally {
        this.$nuxt.$loading.finish();
      }
    },

    async sendForm () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        const { token } = await this.$axios.$post('/auth/register', {
          ...this.account,
          name: `${this.account.first_name} ${this.account.last_name}`
        });

        this.$auth.setUserToken(token);
        this.$router.push('/');
        this.$toast.success('Successfull registered!');
      } catch (e) {
        this.$toast.error(e?.response?.data?.error?.message || e?.response?.data?.message);
      }

      this.sending = false;
      this.$nuxt.$loading.finish();
    }
  },

  head () {
    return {
      title: `Register | ${process.env.APP_NAME}`
    };
  }
};
</script>
