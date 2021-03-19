<template>
  <section class="page-content">
    <overlay-loading v-show="$fetchState.pending" />

    <div class="card float-title">
      <h1 class="card-title">
        Editar categoria {{ data.name }}
      </h1>

      <validation-observer ref="form" v-slot="{ invalid, handleSubmit}">
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
import dataUpdate from '~/mixins/admin/dataUpdate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  mixins: [dataUpdate],
  layout: 'dashboard',
  transition: 'slide-up',

  data: () => ({
    route: '/category',
  }),

  head () {
    return {
      title: `Update ${this.data.name}`,
    };
  },
};
</script>
