<template>
  <section class="page-content">
    <div class="card float-title">
      <h1 class="card-title">
        Cadastrar novo produdo
      </h1>

      <validation-observer ref="form" v-slot="{ invalid, handleSubmit}">
        <form ref="formData" @submit.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="form-group col-12 col-md-10">
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

            <div class="form-group col-12 col-md-2">
              <validation-provider
                v-slot="{ errors, valid }"
                rules="required|numeric|min:1"
              >
                <base-input
                  v-model.number="data.inventory"
                  v-mask="'####'"
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
                rules="required|decimals:2|min:1"
              >
                <base-input
                  v-model="data.price"
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
                <base-select
                  v-model="data.genre"
                  placeholder="Gênero"
                  name="genre"
                  :options="genres"
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
                <base-select
                  v-model="data.categories"
                  placeholder="Categoria"
                  name="categories[]"
                  multiple
                  :options="categories"
                  :error="errors[0]"
                  :is-valid="valid"
                />
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
import BaseInput from '~/components/form/BaseInput.vue';
import BaseSelect from '~/components/form/BaseSelect.vue';
import dataCreate from '~/mixins/admin/dataCreate';

export default {
  layout: 'dashboard',
  transition: 'slide-up',

  components: {
    ValidationObserver,
    ValidationProvider,
    BaseInput,
    BaseSelect
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
      formData.name = 2;

      try {
        await this.$axios.$post('/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        this.$toast.success(`Successful created ${this.data.name}`);

        this.data = {
          name: '',
          inventory: '',
          price: '',
          genre: '',
          categories: []
        };

        this.$nextTick(() => {
          this.$refs.formData.reset();
        });
      } catch (e) {
        this.$toast.error(e.response.data.message);
      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  },

  head () {
    return {
      title: `Create new Product | Dashboard ${process.env.APP_NAME}`
    };
  }
};
</script>
