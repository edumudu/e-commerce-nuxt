<template>
  <section class="page-content">
    <div class="card float-title">
      <h1 class="card-title">
        Cadastrar novo gênero
      </h1>

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
                <base-input
                  v-model.trim="data.name"
                  placeholder="Gênero"
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
import dataCreate from '~/mixins/admin/dataCreate';

export default {
  layout: 'dashboard',
  transition: 'slide-up',

  components: {
    ValidationObserver,
    ValidationProvider,
    BaseInput
  },

  mixins: [dataCreate],

  data: () => ({
    route: '/genre'
  })
};
</script>
