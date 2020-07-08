<template>
  <div class="row">
    <div class="col-md-6">
      <product-img-carrousel v-if="product.photos" :imgs="product.photos" />
    </div>

    <div class="col-md-6">
      <div class="product-description-section">
        <h1 class="product-title d-flex">
          <span class="name">
            {{ product.name }}
          </span>

          <button
            v-if="$auth.loggedIn && $auth.user.role === 'admin'"
            class="btn btn-danger ml-auto"
            @click="$emit('deletePost')"
          >
            Apagar
          </button>
        </h1>

        <div class="price-availability d-flex justify-content-between">
          <div class="price">
            <strong> R$ {{ product.price }} </strong>
            <em> R$<span> 67,00</span> </em>
          </div>

          <div class="availability">
            Disponibilidade: <span>{{ product.inventory }}</span>
          </div>
        </div>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit sed elit congue, ut gravida felis auctor. Vivamus a sem faucibus, facilisis arcu non, mollis felis. Fusce at fermentum ex. Donec ante orci, faucibus sit
        </p>

        <div class="product-options d-flex">
          <div>
            <label>Tamanho: </label>
            <select>
              <option> PP </option>
              <option> P </option>
              <option selected>
                M
              </option>
              <option> G </option>
              <option> GG </option>
            </select>
          </div>

          <div>
            <label>Estampa: </label>
            <select>
              <option selected>
                Roxa
              </option>
              <option> Jacare </option>
            </select>
          </div>
        </div>

        <div class="product-cart d-flex">
          <stepper-quantity
            v-model="quantity"
            :max="product.inventory"
          />

          <button
            class="btn-press btn-add-cart"
            :disabled="cartContains(product.id)"
            @click="$emit('addToCart')"
          >
            Adicionar ao carrinho
          </button>
        </div>

        <div class="review d-flex justify-content-between">
          <rating-stars
            v-if="product.rating"
            :value="product.rating"
          />

          <div v-else>
            No avaliantion yet
          </div>

          <div class="review-links">
            <a href="">
              <span>
                {{ reviewsCounter }}
              </span>

              reviews
            </a>

            <a href="">
              Escreva a review
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductImgCarrousel from '~/components/ProductImgCarrousel.vue';
import StepperQuantity from '~/components/stepper/StepperQuantity.vue';
import RatingStars from '~/components/RatingStars.vue';

export default {
  components: {
    ProductImgCarrousel,
    StepperQuantity,
    RatingStars,
  },

  props: {
    product: { type: Object, required: true },
    reviewsCounter: { type: Number, required: true },
    value: { type: Number, required: true },
  },

  computed: {
    quantity: {
      get () {
        return this.value;
      },

      set (value) {
        this.$emit('input', value);
      },
    },

    ...mapGetters({
      cartContains: 'cart/cartContains',
    }),
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/keyframes/slide';
  @import '~/assets/scss/components/product/product-info';
</style>
