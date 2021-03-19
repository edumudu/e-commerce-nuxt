<template>
  <section id="page-content">
    <div class="container">
      <section class="row">
        <div class="col-12">
          <h2 class="page-title">
            Create an account
          </h2>
        </div>

        <div class="col-12 py-4">
          <register-form />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import RegisterForm from '~/components/Auth/Singup/SingupForm.vue';

export default {
  components: {
    RegisterForm,
  },

  middleware: 'auth',
  auth: 'guest',
  transition: 'slide-left',

  head () {
    return {
      title: `Sing up | ${process.env.APP_NAME}`,
    };
  },
};
</script>
