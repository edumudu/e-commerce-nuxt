<template>
  <section id="page-content" class="contact">
    <div class="container">
      <div class="contact-container max-660 mx-auto">
        <h1 class="title">
          Fale Conosco
        </h1>

        <p class="description">
          Valorizamos a opnião dos nossos clientes, e por isso queremos saber oque você esta achando. Mande-nos oque você esta achando da experiência no site, oque você acha que poderia melhorar, sugestões, ou apenas um elogio :).
        </p>

        <validation-observer v-slot="{ handleSubmit, invalid }">
          <form
            class="row mt-4"
            @submit.prevent="handleSubmit(sendContact)"
          >
            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors }"
                rules="required|alpha"
              >
                <Input
                  v-model.trim="form.name"
                  name="name"
                  placeholder="nome"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors }"
                rules="required|email"
              >
                <Input
                  v-model.trim="form.email"
                  placeholder="email"
                  name="email"
                  type="email"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors }"
                rules="required"
              >
                <Input
                  v-model.trim="form.tel"
                  placeholder="telefone"
                  name="telefone"
                  muted="Opcional"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors }"
                rules="required|min:30"
              >
                <Input
                  v-model.trim="form.message"
                  type="textarea"
                  placeholder="Menssagem"
                  name="message"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group mx-auto">
              <button
                class="btn large"
                type="submit"
                name="send"
                :disabled="sending || invalid"
              >
                Enviar
              </button>
            </div>
          </form>
        </validation-observer>
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
    form: {
      name: '',
      email: '',
      tel: '',
      message: ''
    }
  }),

  methods: {
    sendContact () {
      this.sending = true;

      this.sending = false;
    }
  }
};
</script>
