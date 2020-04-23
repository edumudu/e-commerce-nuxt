<template>
  <section class="slider">
    <div
      class="sliders-wrapper"
      :style=" { width: `${imgs.length * 100}%`, right: `${100 * active}%` } "
    >
      <img
        v-for="(img, index) in imgs"
        :key="index"
        class="responsive-img"
        :src="img.src"
        :title="img.name"
        :alt="img.name"
      >
    </div>

    <ul class="dots-wrapper flex">
      <li
        v-for="(img, index) in imgs"
        :key="index"
        class="dot"
        :class="{ 'active': index === active }"
        @click="setActive(index)"
      />
    </ul>

    <span class="arrow-left" @click="prev">
      <fa :icon="['fas', 'chevron-left']" />
    </span>

    <span class="arrow-right" @click="next">
      <fa :icon="['fas', 'chevron-right']" />
    </span>
  </section>
</template>

<script>
export default {
  props: {
    imgs: { type: Array, required: true },
    delay: { type: Number, default: 5000 }
  },

  data: () => ({
    active: 0
  }),

  mounted () {
    this.clearTimer();
  },

  methods: {
    setActive (index) {
      this.clearTimer();
      this.active = index;
    },

    next () {
      this.clearTimer();
      this.active += this.active < this.imgs.length - 1;
    },

    prev () {
      this.clearTimer();
      this.active -= this.active > 0;
    },

    clearTimer () {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.setActive(this.active < this.imgs.length - 1 ? this.active + 1 : 0);
      }, this.delay);
    }
  }
};
</script>
