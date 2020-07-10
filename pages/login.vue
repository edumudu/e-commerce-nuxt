<template>
  <section id="page-content">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="page-title">
            Login da conta
          </h1>
        </div>

        <div class="col-sm-12 col-md-6">
          <h2 class="title">
            New Client
          </h2>

          <p class="paragraph">
            Ao criar uma conta, você poderá comprar mais rapidamente, ficar atualizado sobre o status de um pedido e acompanhar os pedidos feitos anteriormente.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <h2 class="title">
            Entrar
          </h2>

          <p class="paragraph-sm">
            Eu tenho uma conta.
          </p>

          <validation-observer v-slot="{ handleSubmit, invalid }">
            <form @submit.prevent="handleSubmit(sendLogin)">
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required|email|max:255"
                >
                  <base-input
                    v-model="login.email"
                    name="login"
                    type="email"
                    placeholder="E-mail"
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>
              </div>

              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, valid }"
                  rules="required|min:8"
                >
                  <base-input
                    v-model="login.password"
                    type="password"
                    name="password"
                    placeholder="password"
                    :error="errors[0]"
                    :is-valid="valid"
                  />
                </validation-provider>

                <nuxt-link class="support-link ml-2" to="/forget-password">
                  Esqueceu sua senha?
                </nuxt-link>
              </div>

              <div class="form-group">
                <button
                  class="btn-press"
                  type="submit"
                  :disabled="sending || invalid"
                >
                  Sign in
                </button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  middleware: 'auth',
  auth: 'guest',
  transition: 'slide-left',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    sending: false,
    login: {
      email: '',
      password: '',
    },
  }),

  methods: {
    async sendLogin () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        await this.$auth.loginWith('local', { data: this.login });
      } catch (e) {
        this.$toast.error('User or password incorrect');
      }

      this.sending = false;
      this.$nuxt.$loading.finish();
    },
  },

  head () {
    return {
      title: `Sing in | ${process.env.APP_NAME}`,
    };
  },
};
</script>
