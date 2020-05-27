<template>
  <section id="page-content">
    <slider :imgs="imgs" />

    <vitrine title="destaques" :items="destaques" />
  </section>
</template>

<script>
import Slider from '~/components/Slider.vue';
import Vitrine from '~/components/Vitrine.vue';

export default {
  components: {
    Slider,
    Vitrine
  },

  data: () => ({
    destaques: [],
    imgs: [
      { name: 'img_1', src: 'https://images.unsplash.com/photo-1586964484161-648499ad1a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
      { name: 'img_2', src: 'https://images.unsplash.com/photo-1586964484161-648499ad1a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
      { name: 'img_3', src: 'https://images.unsplash.com/photo-1586964484161-648499ad1a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
      { name: 'img_4', src: 'https://images.unsplash.com/photo-1586964484161-648499ad1a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }
    ]
  }),

  async mounted () {
    const { data } = await this.$axios.$get('/product');
    this.destaques = data;
  }
};
</script>
