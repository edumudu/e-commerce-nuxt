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

        <validation-observer
          ref="form"
          v-slot="{ handleSubmit, invalid }"
        >
          <form
            class="row mt-4"
            @submit.prevent="handleSubmit(sendContact)"
          >
            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|alpha_spaces"
              >
                <base-input
                  v-model="form.name"
                  name="name"
                  placeholder="nome"
                  :is-valid="valid"
                  :error="errors[0]"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|email"
              >
                <base-input
                  v-model="form.email"
                  placeholder="email"
                  name="email"
                  type="email"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="max:255"
              >
                <base-input
                  v-model="form.phone"
                  v-mask="phoneMask(form.phone)"
                  placeholder="telefone"
                  name="phone"
                  muted="Opcional"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|min:30"
              >
                <base-input
                  v-model="form.body"
                  type="textarea"
                  placeholder="Menssagem"
                  name="body"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group mx-auto">
              <button
                class="btn-press btn-large"
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
import PhoneMask from '~/mixins/phoneMask';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  mixins: [PhoneMask],
  transition: 'slide-left',

  data: () => ({
    sending: false,
    form: {
      name: '',
      email: '',
      phone: '',
      body: '',
    },
  }),

  head () {
    return {
      title: `Contact | ${process.env.APP_NAME}`,
    };
  },

  methods: {
    async sendContact () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        await this.$axios.$post('/contact', this.form);
        this.form.name = this.form.email = this.form.phone = this.form.body = '';

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      } catch (error) {
        //
      }

      this.sending = false;
      this.$nuxt.$loading.finish();
    },
  },
};
</script>
