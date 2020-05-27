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

          <form @submit.prevent="sendLogin">
            <div class="form-group">
              <Input
                v-model="login.email"
                name="login"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="form-group">
              <Input
                v-model="login.password"
                type="password"
                name="password"
                placeholder="Senha"
                required
              />

              <nuxt-link class="support-link" to="/forget-password">
                Esqueceu sua senha?
              </nuxt-link>
            </div>

            <div class="form-group">
              <input class="btn" type="submit" value="Entrar">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Input from '~/components/Input.vue';

export default {
  components: { Input },

  data: () => ({
    login: {
      email: '',
      password: ''
    }
  }),

  methods: {
    sendLogin () {
      this.$auth.loginWith('local', { data: this.login });
    }
  }
};
</script>
