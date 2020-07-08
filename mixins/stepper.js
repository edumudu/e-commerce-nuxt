export default {
  props: {
    value: { type: Number, default: 1 },
    max: { type: Number, default: Infinity },
  },

  computed: {
    val: {
      set (value) {
        this.$emit('input', +value);
      },

      get () {
        return this.value;
      },
    },
  },

  methods: {
    up () {
      this.val += this.val < this.max;
    },

    down () {
      this.val -= this.val > 1;
    },
  },
};
