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

    <file-input-images
      v-if="isImage"
      :images="files"
      @remove="removeFile"
    />

    <span
      v-if="error"
      class="invalid-message"
    >
      {{ error }}
    </span>
  </div>
</template>

<script>
import FileInputImages from './FileInputImages';

export default {
  components: {
    FileInputImages,
  },

  inheritAttrs: false,

  props: {
    type: { type: String, default: 'image' },
    error: { type: String, default: '' },
    isValid: { type: Boolean, required: true },
    multiple: { type: Boolean, default: false },
  },

  data: () => ({
    accepts: {
      image: 'image/*',
    },
    files: [],
  }),

  computed: {
    classes () {
      return {
        'is-valid': this.isValid,
        'is-invalid': !!this.error,
      };
    },

    names () {
      return this.files.map(item => item.name
        .replace(/\.\w+/, '')
        .substr(0, 10),
      ).join(', ');
    },

    isImage () {
      return this.type === 'image';
    },
  },

  watch: {
    files () {
      this.$emit('input', this.multiple ? this.files : this.files[0]);
    },
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
      this.files.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_file-input';
</style>
