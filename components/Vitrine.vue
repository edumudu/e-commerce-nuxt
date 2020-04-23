<template>
  <section class="vitrine">
    <div class="container">
      <h1
        v-if="title"
        class="title"
      >
        {{ title }}
      </h1>

      <div class="products-box row">
        <div
          v-for="item in items"
          :key="item.id"
          class="box col-12 col-sm-6 col-md-4 col-lg-3 py-3 px-2 d-flex flex-column"
        >
          <nuxt-link :to="`/product/${item.id}`">
            <img
              class="responsive-img box-img"
              :src="getThumb(item)"
              :alt="item.name"
              :title="item.name"
            >
          </nuxt-link>

          <div class="box-title">
            <nuxt-link :to="`/product/${item.id}`">
              {{ item.name }}
            </nuxt-link>
          </div>

          <div class="box-body d-flex  justify-content-between align-items-center">
            <span class="price">R$ {{ item.price }} </span>
            <nuxt-link
              :to="`/product/${item.id}`"
              class="btn btn-shop ml-auto"
            >
              Comprar
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    title: { type: String, default: '' }
  },

  methods: {
    getThumb (item) {
      return item.imgs.find(i => i.includes('thumb'));
    }
  }
};
</script>
