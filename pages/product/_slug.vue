<template>
  <section id="page-content">
    <overlay-loading v-show="$fetchState.pending" />

    <div class="container">
      <div class="my-5">
        <product-info
          v-model="quantity"
          :product="product"
          :reviews-counter="reviewsCounter"
          @deletePost="deletePost"
          @addToCart="addToCart"
        />

        <!--Parte de descrição e reviews-->
        <div class="row mt-4">
          <div class="col-sm-12">
            <tabs-list>
              <tabs-item name="Descrição" selected>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales volutpat ligula ut congue. Quisque molestie in metus vitae luctus. Sed mi risus, euismod vel fringilla vel, vestibulum et erat. Donec massa magna, facilisis ac enim sed, suscipit varius odio. Nunc ut nulla congue, bibendum lectus et, bibendum mauris.</p>

                <p>Quisque egestas metus velit, feugiat mollis ante ultricies at. Mauris fermentum ac neque id mattis. Fusce lorem leo, elementum sit amet elit et, interdum vulputate enim. Nam fermentum a dolor sit amet fermentum. Nam egestas mauris libero, fringilla dictum ex vulputate a. In venenatis est a tortor consectetur pulvinar. Suspendisse in purus sit amet felis rutrum euismod.</p>
              </tabs-item>

              <tabs-item name="Informação">
                <div class="information-table my-2 mx-3">
                  <div class="table-head">
                    <div class="row">
                      <div class="col-sm-12">
                        Informações adicionais
                      </div>
                    </div>
                  </div>
                  <div class="table-body">
                    <div class="row">
                      <div class="col-sm-6">
                        Material
                      </div>
                      <div class="col-sm-6">
                        Algodão
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        M
                      </div>
                      <div class="col-sm-6">
                        16cm
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        G
                      </div>
                      <div class="col-sm-6">
                        25cm
                      </div>
                    </div>
                  </div>
                </div>
              </tabs-item>

              <tabs-item name="Avaliações">
                <product-reviews
                  :product-id="product.id || 0"
                  :reviews="product.reviews || []"
                  @addReview="addReview"
                />
              </tabs-item>
            </tabs-list>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductInfo from '~/components/Product/ProductInfo.vue';
import ProductReviews from '~/components/Product/ProductReviews.vue';
import TabsList from '~/components/tabs/TabsList.vue';
import TabsItem from '~/components/tabs/TabsItem.vue';
import OverlayLoading from '~/components/OverlayLoading.vue';
import CachingActivated from '~/mixins/caching-activated';

export default {
  components: {
    ProductReviews,
    ProductInfo,
    TabsList,
    TabsItem,
    OverlayLoading,
  },

  mixins: [CachingActivated],
  transition: 'slide-left',

  data: () => ({
    product: {
      rating: 0,
      imgs: [],
    },
    quantity: 1,
  }),

  async fetch () {
    this.product = await this.$axios.$get(`/product/${this.$route.params.slug}`);
  },

  head: () => ({
    title: `${this.product.name}`,
  }),

  computed: {
    reviewsCounter () {
      return (this.product.reviews && this.product.reviews.length) || 0;
    },
  },

  methods: {
    addReview (review) {
      this.product.reviews.push(review);
    },

    addToCart () {
      const prod = {
        id: this.product.id,
        quantity: this.quantity,
      };

      this.$store.dispatch('cart/addProductToCart', prod);
    },

    async deletePost () {
      try {
        await this.$axios.$delete(`/product/${this.product.slug}`);
        this.$toast.success(`Successful deleted "${this.product.name}"`);
        this.$router.push('/');
      } catch (e) {
        this.$toast.error('Something went wrong, try again later');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/keyframes/slide';
  @import '~/assets/scss/pages/product';
</style>
