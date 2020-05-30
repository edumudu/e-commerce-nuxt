<template>
  <section class="page-content">
    <div class="card">
      <div v-show="failMessage" class="alert alert-danger">
        {{ failMessage }}
      </div>

      <validation-observer ref="form" v-slot="{ invalid, handleSubmit}">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|alpha_spaces|max:255"
              >
                <Input
                  v-model.trim="category.name"
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
import Input from '~/components/Input.vue';

export default {
  layout: 'dashboard',

  components: {
    ValidationObserver,
    ValidationProvider,
    Input
  },

  async fetch () {
    this.category = await this.$axios.$get(`/category/${this.$route.params.slug}`);
  },

  data: () => ({
    failMessage: '',
    sending: false,
    category: {}
  }),

  methods: {
    async onSubmit () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        await this.$axios.$put(`/category/${this.category.slug}`, this.category);
        this.$router.push('/admin/category');
      } catch (e) {

      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  }
};
</script>
