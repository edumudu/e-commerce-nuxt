<template>
  <section class="page-content">
    <div class="card">
      <div v-show="failMessage" class="alert alert-danger">
        {{ failMessage }}
      </div>

      <validation-observer ref="form" v-slot="{ invalid, handleSubmit}">
        <form ref="formData" @submit.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="form-group col-12 col-md-10">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|alpha_spaces|max:255"
              >
                <Input
                  v-model.trim="data.name"
                  placeholder="Nome"
                  name="name"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12 col-md-2">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|numeric|min:1"
              >
                <Input
                  v-model.trim="data.inventory"
                  placeholder="Estoque"
                  name="inventory"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12 col-md-4">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|numeric|min:1"
              >
                <Input
                  v-model.trim="data.price"
                  placeholder="Preço"
                  name="price"
                  :error="errors[0]"
                  :is-valid="valid"
                />
              </validation-provider>
            </div>

            <div class="form-group col-12 col-md-4">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|numeric|min:1"
              >
                <select
                  v-model.trim="data.genre"
                  placeholder="Gênero"
                  name="genre"
                  class="form-field"
                  :class="{ 'is-valid': valid, 'is-invalid': !!errors[0] }"
                >
                  <option
                    v-for="genre in genres"
                    :key="genre.id"
                    :value="genre.id"
                  >
                    {{ genre.name }}
                  </option>
                </select>

                <span class="invalid-message">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>

            <div class="form-group col-12 col-md-4">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|numeric|min:1"
              >
                <select
                  v-model="data.categories"
                  placeholder="Categoria"
                  name="categories[]"
                  class="form-field"
                  :class="{ 'is-valid': valid, 'is-invalid': !!errors[0] }"
                  multiple
                >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>

                <span class="invalid-message">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="image"
              >
                <input
                  type="file"
                  placeholder="Photos"
                  name="photos[]"
                  class="form-field"
                  :class="{ 'is-valid': valid, 'is-invalid': !!errors[0] }"
                  multiple
                >

                <span class="invalid-message">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>

            <div class="form-group col-12">
              <button
                class="btn-press btn-large"
                type="submit"
                :disabled="sending || invalid"
              >
                Cadastrar
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
import dataCreate from '~/mixins/admin/dataCreate';

export default {
  layout: 'dashboard',

  components: {
    ValidationObserver,
    ValidationProvider,
    Input
  },

  mixins: [dataCreate],

  data: () => ({
    data: {
      name: '',
      inventory: '',
      price: '',
      genre: '',
      categories: []
    },
    failMessage: '',
    sending: false,
    genres: [],
    categories: []
  }),

  async mounted () {
    const genres = await this.$axios.$get('/genre');
    const categories = await this.$axios.$get('/category');
    this.genres = genres.data;
    this.categories = categories.data;
  },

  methods: {
    async onSubmit () {
      this.$nuxt.$loading.start();
      this.sending = true;

      const formData = new FormData(this.$refs.formData);

      try {
        await this.$axios.$post('/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.data = {};
        this.failMessage = '';

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      } catch (e) {
        this.failMessage = 'Something went wrong, try again later';
      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  }
};
</script>
