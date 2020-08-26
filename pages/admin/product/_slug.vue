<template>
  <section class="page-content">
    <overlay-loading v-show="$fetchState.pending" />

    <div class="card float-title">
      <h1 class="card-title">
        Editar product {{ product.name }}
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
                  v-model="product.name"
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
                  v-model.number="product.inventory"
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
                  v-model.number="product.price"
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
                  v-model="product.genre"
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
                  v-model="product.categories"
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
                <base-file-input
                  placeholder="Photos"
                  name="photos[]"
                  multiple
                  :error="errors[0]"
                  :is-valid="valid"
                  @input="handleInputSelection"
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
import OverlayLoading from '~/components/OverlayLoading.vue';

export default {
  layout: 'dashboard',

  components: {
    ValidationObserver,
    ValidationProvider,
    OverlayLoading,
  },

  async fetch () {
    try {
      this.genres = (await this.$axios.$get('/genre')).data;
      this.categories = (await this.$axios.$get('/category')).data;
      this.product = await this.$axios.$get(`/product/${this.$route.params.slug}`);

      this.product.photos = this.product.photos.map(async (url, i) => {
        const response = await fetch(url, { mode: 'no-cors' });

        return new File(response.blob(), i);
      });

      this.product.genre = this.product.genre.id;
      this.product.categories = this.product.categories.map(category => category.id);
    } catch (e) {
      if (!process.server) {
        switch (e.response.status) {
          case 404:
            this.$toast.error('Not found product');
            this.$router.push('/admin/product');
            break;
          default:
            this.$toast.error('Something went wrong, try again later');
        }
      } else {
        this.$nuxt.context.redirect('/admin/product');
      }
    }
  },

  data: () => ({
    product: {
      name: '',
      photos: [],
    },
    categories: [],
    genres: [],
    sending: false,
  }),

  methods: {
    async onSubmit () {
      this.$nuxt.$loading.start();
      this.sending = true;

      const formData = new FormData(this.$refs.formData);

      try {
        await this.$axios.$post(`/product/${this.product.slug}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.$router.push('/admin/product');
        this.$toast.success(`Successful updated ${this.product.name}`);
      } catch (e) {
        this.$toast.error('Something went wrong, try again later');
      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    },

    handleInputSelection (files) {
      this.product.photos = files;
    },
  },

  head () {
    return {
      title: `Update ${this.product.name} | Dashboard ${process.env.APP_NAME}`,
    };
  },
};
</script>
