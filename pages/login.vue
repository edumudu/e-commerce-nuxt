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
            Novo Cliente
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
                  v-slot="{ errors }"
                  rules="required|email"
                >
                  <Input
                    v-model.trim="login.email"
                    name="login"
                    type="email"
                    placeholder="E-mail"
                    :error="errors[0]"
                  />
                </validation-provider>
              </div>

              <div class="form-group">
                <validation-provider
                  v-slot="{ errors }"
                  rules="required|min:8"
                >
                  <Input
                    v-model.trim="login.password"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    :error="errors[0]"
                  />
                </validation-provider>

                <nuxt-link class="support-link ml-2" to="/forget-password">
                  Esqueceu sua senha?
                </nuxt-link>
              </div>

              <div class="form-group">
                <input
                  class="btn"
                  type="submit"
                  value="Entrar"
                  :disabled="sending || invalid"
                >
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
import Input from '~/components/Input.vue';

export default {
  components: {
    Input,
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    sending: false,
    login: {
      email: '',
      password: ''
    }
  }),

  methods: {
    async sendLogin () {
      this.sending = true;
      await this.$auth.loginWith('local', { data: this.login });
      this.sending = false;
    }
  }
};
</script>
