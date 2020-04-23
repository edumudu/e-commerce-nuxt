<template>
  <section id="page-content">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6">
          <product-img-carrousel v-if="product.imgs.length > 0" :imgs="product.imgs" />
        </div>

        <div class="col-md-6">
          <div class="product-description-section">
            <h1 class="product-title d-flex">
              {{ product.name }}

              <button
                v-if="product.posted_by === $auth.user.id"
                class="btn btn-danger ml-auto"
                @click="deletePost"
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

            <div class="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit sed elit congue, ut gravida felis auctor. Vivamus a sem faucibus, facilisis arcu non, mollis felis. Fusce at fermentum ex. Donec ante orci, faucibus sit
              </p>
            </div>

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
              <product-quantity
                v-model="quantity"
                :max="product.inventory"
              />

              <button
                class="btn btn-add-cart"
                @click="addToCart"
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
                  <span>7</span> reviews
                </a>

                <a href="">
                  Escreva a review
                </a>
              </div>
            </div>
          </div>
        </div>

        <!--Parte de descrição e reviews-->
        <div class="col-sm-12">
          <tabs>
            <tab name="Descrição" selected>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales volutpat ligula ut congue. Quisque molestie in metus vitae luctus. Sed mi risus, euismod vel fringilla vel, vestibulum et erat. Donec massa magna, facilisis ac enim sed, suscipit varius odio. Nunc ut nulla congue, bibendum lectus et, bibendum mauris.</p>

              <p>Quisque egestas metus velit, feugiat mollis ante ultricies at. Mauris fermentum ac neque id mattis. Fusce lorem leo, elementum sit amet elit et, interdum vulputate enim. Nam fermentum a dolor sit amet fermentum. Nam egestas mauris libero, fringilla dictum ex vulputate a. In venenatis est a tortor consectetur pulvinar. Suspendisse in purus sit amet felis rutrum euismod.</p>
            </tab>

            <tab name="Informação">
              <div class="information-table">
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
            </tab>

            <tab name="Avaliações">
              <div
                v-for="r in reviews"
                :key="r.id"
                class="review-item"
              >
                <div class="review-submitted">
                  <div class="d-flex justify-content-between">
                    <strong> {{ r.user }} </strong>

                    <rating-stars :value="r.rating" />
                  </div>
                  <span class="text-muted"> {{ r.created_at }} </span>
                </div>

                <div class="review-content">
                  <p> {{ r.review }} </p>
                </div>
              </div>

              <div
                v-show="reviews.length <= 0"
                class="py-4"
              >
                No comments yet.
              </div>

              <div
                v-if="$auth.loggedIn"
                class="write-review mx-auto"
              >
                <h1 class="title">
                  Escreva sua avaliação
                </h1>

                <form @submit.prevent="sendReview">
                  <div class="form-group">
                    <rating-stars v-model="review.rating" editable />
                  </div>

                  <div class="form-group">
                    <Input
                      v-model="review.review"
                      placeholder="review"
                      type="textarea"
                      name="review"
                      required
                    />
                  </div>

                  <div class="form-group d-flex justify-content-center">
                    <button type="submit" class="btn">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </tab>
          </tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Input from '~/components/Input.vue';
import ProductImgCarrousel from '~/components/ProductImgCarrousel.vue';
import ProductQuantity from '~/components/ProductQuantity.vue';
import RatingStars from '~/components/RatingStars.vue';
import Tabs from '~/components/tabs/Tabs.vue';
import Tab from '~/components/tabs/Tab.vue';

export default {
  components: {
    Input,
    ProductImgCarrousel,
    ProductQuantity,
    RatingStars,
    Tabs,
    Tab
  },

  data: () => ({
    product: {
      rating: 0,
      imgs: []
    },
    quantity: 1,
    review: {
      review: '',
      rating: 0
    },
    reviews: []
  }),

  async mounted () {
    this.product = await this.$axios.$get(`/product/${this.$route.params.id}`);
    this.reviews = await this.$axios.$get('/review', { params: { prod_id: this.$route.params.id } });
  },

  methods: {
    addToCart () {
      const prod = {
        id: this.product.id,
        quantity: this.quantity
      };

      this.$store.dispatch('cart/addProductToCart', prod);
    },

    async sendReview () {
      const data = {
        prod_ref: +this.$route.params.id,
        user_ref: this.$auth.user.id,

        ...this.review
      };

      const { id } = await this.$axios.$post('/review', data);
      this.reviews.push(await this.$axios.$get(`/review/${id}`));
      this.review = {
        review: '',
        rating: 0
      };
    },

    async deletePost () {
      await this.$axios.$delete(`/product/${this.product.id}`);
      this.$router.push('/');
    }
  }
};
</script>
