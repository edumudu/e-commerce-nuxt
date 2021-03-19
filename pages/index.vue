<template>
  <section id="page-content">
    <home-slider :imgs="imgs" />

    <product-vitrine title="destaques" :items="destaques" />
  </section>
</template>

<script>
import HomeSlider from '~/components/HomeSlider.vue';
import ProductVitrine from '~/components/ProductVitrine.vue';
import CachingActivated from '~/mixins/caching-activated';

export default {
  components: {
    HomeSlider,
    ProductVitrine,
  },

  mixins: [CachingActivated],
  transition: 'slide-right',

  data: () => ({
    destaques: [],
    imgs: [
      { name: 'img_1', src: 'https://images.unsplash.com/photo-1586964484161-648499ad1a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80' },
      { name: 'img_2', src: 'https://images.unsplash.com/photo-1506269085878-5c33839927e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80' },
      { name: 'img_3', src: 'https://images.unsplash.com/photo-1531270628127-e13d5094998a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80' },
      { name: 'img_4', src: 'https://images.unsplash.com/photo-1567017873679-0698e91b3529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80' },
    ],
  }),

  async fetch () {
    const { data } = await this.$axios.$get('/product');
    this.destaques = data;
  },

  head: () => ({
    title: 'Home',
  }),
};
</script>
