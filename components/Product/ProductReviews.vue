<template>
  <div>
    <div
      v-for="r in reviews"
      :key="r.id"
      class="review-item pb-2 mb-4"
    >
      <div class="review-submitted">
        <div class="d-flex justify-content-between">
          <strong> {{ r.user.name }} </strong>

          <rating-stars :value="r.rating" />
        </div>
        <span class="text-muted px-0"> {{ r.created_at }} </span>
      </div>

      <div class="review-content mt-2">
        <p> {{ r.review }} </p>
      </div>
    </div>

    <div
      v-if="noHaveReviews"
      class="py-4"
    >
      No comments yet.
    </div>

    <div
      v-if="$auth.loggedIn"
      class="write-review mx-auto max-660"
    >
      <h1 class="title">
        Escreva sua avaliação
      </h1>

      <validation-observer v-slot="{ handleSubmit, invalid }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="form-group">
            <validation-provider rules="required|min_value:1">
              <rating-stars v-model="review.rating" editable />
            </validation-provider>
          </div>

          <div class="form-group">
            <base-input
              v-model="review.review"
              placeholder="review"
              type="textarea"
              name="review"
              required
            />
          </div>

          <div class="form-group d-flex justify-content-center">
            <button
              type="submit"
              class="btn-press"
              :disabled="invalid || sending"
            >
              Enviar
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import RatingStars from '~/components/RatingStars.vue';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    RatingStars,
  },

  props: {
    reviews: { type: Array, required: true },
    productId: { type: Number, required: true },
  },

  data: () => ({
    sending: false,
    review: {
      rating: 0,
      review: '',
    },
  }),

  computed: {
    noHaveReviews () {
      return this.reviews > 0;
    },
  },

  methods: {
    async onSubmit () {
      this.sending = true;

      try {
        const review = await this.$axios.$post('/review', {
          product: this.productId,
          ...this.review,
        });

        this.$emit('addReview', review);

        this.review = {
          review: '',
          rating: 0,
        };

        this.$toast.success('Successful posted review');
      } catch (e) {
        this.$toast.error(e.response.data.message);
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/product/product-reviews';
</style>
