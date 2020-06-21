<template>
  <section class="page-content">
    <div class="card float-title">
      <h1 class="card-title">
        Editar gênero {{ data.name }}
      </h1>

      <validation-observer ref="form" v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|alpha_spaces|max:255"
              >
                <base-input
                  v-model="data.name"
                  placeholder="Nome"
                  name="name"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <button
                class="btn-press btn-large"
                type="submit"
                :disabled="sending || invalid"
              >
                Atualizar
              </button>
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import BaseInput from '~/components/form/BaseInput.vue';

export default {
  layout: 'dashboard',
  transition: 'slide-up',

  components: {
    ValidationObserver,
    ValidationProvider,
    BaseInput
  },

  async fetch () {
    this.data = await this.$axios.$get(`/genre/${this.$route.params.slug}`);
  },

  data: () => ({
    sending: false,
    data: {}
  }),

  methods: {
    async onSubmit () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        await this.$axios.$put(`/genre/${this.data.slug}`, this.data);
        this.$router.push('/admin/genre');
      } catch (e) {

      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  },

  head () {
    return {
      title: `Update ${this.data.name} | Dashboard ${process.env.APP_NAME}`
    };
  }
};
</script>
