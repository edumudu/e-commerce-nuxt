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
          <form class="row">
            <div class="col-12 col-md-6">
              <h2 class="mid-title">
                Dados pessoais
              </h2>

              <div class="row">
                <div class="form-group col-md-6">
                  <Input
                    v-model="account.first_name"
                    placeholder="Primeiro nome"
                    required
                  />
                </div>

                <div class="form-group col-md-6">
                  <Input
                    v-model="account.last_name"
                    placeholder="Sobrenome"
                    required
                  />
                </div>

                <div class="form-group col-12">
                  <Input
                    v-model="account.email"
                    type="email"
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div class="form-group col-12">
                  <Input
                    v-model="account.tel"
                    placeholder="Telefone"
                    required
                  />
                </div>
              </div>

              <h2 class="mid-title mt-4">
                Senhas
              </h2>

              <div class="form-group">
                <Input
                  v-model="account.password"
                  type="password"
                  placeholder="Senha"
                  required
                />
              </div>

              <div class="form-group">
                <Input
                  v-model="confirm_password"
                  type="password"
                  placeholder="Confirme sua senha"
                  required
                />
              </div>
            </div>

            <div class="col-12 col-md-6">
              <h2 class="mid-title mt-4 mt-md-0">
                Endereço
              </h2>

              <div class="row">
                <div class="form-group col-md-9 col-lg-10">
                  <Input
                    v-model="account.street"
                    placeholder="Rua"
                    required
                  />
                </div>

                <div class="form-group col-md-3 col-lg-2">
                  <Input
                    v-model="account.number"
                    placeholder="Nº"
                    required
                  />
                </div>

                <div class="form-group col-md-8">
                  <Input
                    v-model="account.city"
                    placeholder="Cidade"
                    required
                  />
                </div>

                <div class="form-group col-md-4">
                  <Input
                    v-model="account.cep"
                    placeholder="CEP"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="col-12 my-4">
              <input
                id="terms"
                v-model="isAgree"
                type="checkbox"
                required
              >

              <label for="terms" />

              <label for="terms">Li e concordo com a Política de Privacidade</label>
            </div>

            <div class="col-12 d-flex justify-content-end">
              <div class="form-group">
                <input class="btn" type="submit">
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Input from '~/components/Input.vue';

export default {
  components: { Input },

  data: () => ({
    account: {
      first_name: '',
      last_name: '',
      email: '',
      tel: '',
      password: '',
      street: '',
      number: '',
      city: '',
      cep: ''
    },

    isAgree: false,
    confirm_password: ''
  })
};
</script>
