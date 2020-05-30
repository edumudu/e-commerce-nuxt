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
                  v-model.trim="data.name"
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
    route: '/category'
  })
};
</script>
