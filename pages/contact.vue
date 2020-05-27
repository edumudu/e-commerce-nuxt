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

        <form
          class="row mt-4"
          @submit.prevent="sendContact"
        >
          <div class="form-group col-12">
            <Input
              v-model="form.name"
              name="name"
              placeholder="nome"
              required
            />
          </div>

          <div class="form-group col-12">
            <Input
              v-model="form.email"
              placeholder="email"
              name="email"
              type="email"
              required
            />
          </div>

          <div class="form-group col-12">
            <Input
              v-model="form.tel"
              placeholder="telefone"
              name="telefone"
              muted="Opcional"
            />
          </div>

          <div class="form-group col-12">
            <Input
              v-model="form.message"
              type="textarea"
              placeholder="Menssagem"
              name="message"
            />
          </div>

          <div class="form-group mx-auto">
            <button class="btn large" type="submit" name="send">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Input from '~/components/Input.vue';

export default {
  components: {
    Input
  },

  data: () => ({
    form: {
      name: '',
      email: '',
      tel: '',
      message: ''
    }
  }),

  methods: {
    sendContact () {

    }
  }
};
</script>
