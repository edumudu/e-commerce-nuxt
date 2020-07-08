<template>
  <div>
    <label>
      <input
        type="file"
        class="form-field"
        :multiple="multiple"
        :class="classes"
        :accept="accepts[type]"
        v-bind="$attrs"
        @change="handleChange"
      >

      <div class="fake-input">
        <a class="btn btn-info">
          Select file
        </a>

        <span class="fake-input-names">
          {{ names }}
        </span>
      </div>
    </label>

    <ul
      v-if="isImage"
      class="d-flex flex-nowrap images-view"
    >
      <li
        v-for="(image, index) in images"
        :key="index"
        class="col-12 col-sm-6 col-md-3 col-lg-2 images-view-item"
      >
        <img
          class="images-item"
          :src="image"
        >

        <fa
          class="images-view-remove"
          :icon="['far', 'times-circle']"
          @click="removeFile(index)"
        />
      </li>
    </ul>

    <span
      v-if="error"
      class="invalid-message"
    >
      {{ error }}
    </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    type: { type: String, default: 'image' },
    error: { type: String, default: '' },
    isValid: { type: Boolean, required: true },
    multiple: { type: Boolean, default: false }
  },

  data: () => ({
    accepts: {
      image: 'image/*'
    },
    files: [],
    images: []
  }),

  computed: {
    classes () {
      return {
        'is-valid': this.isValid,
        'is-invalid': !!this.error
      };
    },

    names () {
      return this.files.map(item => item.name
        .replace(/\.\w+/, '')
        .substr(0, 10)
      ).join(', ');
    },

    isImage () {
      return this.type === 'image';
    }
  },

  watch: {
    files () {
      this.isImage && this.fetchImages();
      this.$emit('input', this.multiple ? this.files : this.files[0]);
    }
  },

  methods: {
    handleChange (e) {
      const files = e.target.files;

      if (!files.length) {
        return;
      }

      this.files = Array.from(files);
    },

    removeFile (index) {
      this.isImage && this.images.splice(index, 1);
      this.files.splice(index, 1);
    },

    readFileAsync (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    },

    fetchImages () {
      this.images = [];

      this.files.forEach((file) => {
        this.readFileAsync(file).then(image => this.images.push(image));
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_file-input';
</style>
