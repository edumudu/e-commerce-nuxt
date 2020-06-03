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
                      rules="required|alpha|min:3"
                    >
                      <base-input
                        v-model.trim="account.first_name"
                        placeholder="Primeiro nome"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-6">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required|alpha|min:3"
                    >
                      <base-input
                        v-model.trim="account.last_name"
                        placeholder="Sobrenome"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-12">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required|email"
                    >
                      <base-input
                        v-model.trim="account.email"
                        type="email"
                        placeholder="E-mail"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-12">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required"
                    >
                      <base-input
                        v-model.trim="account.tel"
                        placeholder="Telefone"
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
                      v-model.trim="account.password"
                      type="password"
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
                      v-model.trim="account.password_confirmation"
                      type="password"
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
                  <div class="form-group col-md-9 col-lg-10">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required"
                    >
                      <base-input
                        v-model.trim="account.street"
                        placeholder="Rua"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-3 col-lg-2">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required|numeric"
                    >
                      <base-input
                        v-model.trim="account.number"
                        placeholder="Nº"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-8">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required"
                    >
                      <base-input
                        v-model.trim="account.city"
                        placeholder="Cidade"
                        :error="errors[0]"
                        :is-valid="valid"
                      />
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-4">
                    <validation-provider
                      v-slot="{ errors, valid }"
                      rules="required"
                    >
                      <base-input
                        v-model.trim="account.cep"
                        placeholder="CEP"
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
                  <checkout
                    v-model="isAgree"
                    :error="errors[0]"
                  >
                    Li e concordo com a Política de Privacidade
                  </checkout>
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
import Checkout from '~/components/form/BaseCheckout.vue';

export default {
  transition: 'slide-left',

  components: {
    BaseInput,
    ValidationProvider,
    ValidationObserver,
    Checkout
  },

  data: () => ({
    account: {
      first_name: '',
      last_name: '',
      email: '',
      tel: '',
      password: '',
      password_confirmation: '',
      street: '',
      number: '',
      city: '',
      cep: ''
    },

    isAgree: false,
    sending: false
  }),

  methods: {
    async sendForm () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        const { token } = await this.$axios.$post('/auth/register', {
          ...this.account,
          name: `${this.account.first_name} ${this.account.last_name}`
        });

        this.$auth.setUserToken(token);
      } catch (e) {
        //
      }

      this.sending = false;
      this.$nuxt.$loading.finish();
    }
  }
};
</script>
