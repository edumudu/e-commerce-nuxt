<template>
  <section class="vitrine">
    <div class="container">
      <h1
        v-if="title"
        class="title"
      >
        {{ title }}
      </h1>

      <div
        v-if="items.length"
        class="products-box row"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 my-4 px-2"
        >
          <div class="box d-flex flex-column">
            <nuxt-link :to="`/product/${item.slug}`">
              <img
                class="responsive-img box-img"
                :src="item.photos[0] || 'https://via.placeholder.com/300x200?text=Not%20Photo'"
                :alt="item.name"
                :title="item.name"
              >
            </nuxt-link>

            <div class="box-title">
              <nuxt-link :to="`/product/${item.slug}`">
                {{ item.name }}
              </nuxt-link>
            </div>

            <div class="box-body d-flex  justify-content-between align-items-center">
              <span class="price">R$ {{ item.price }} </span>
              <nuxt-link
                :to="`/product/${item.slug}`"
                class="btn btn-shop ml-auto"
              >
                Comprar
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        Nothing found
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    title: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_vitrine';
</style>
