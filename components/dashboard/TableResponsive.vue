<template>
  <table class="responsive-table">
    <thead>
      <tr>
        <th
          v-for="(key, index) in keys"
          :key="index"
        >
          {{ key }}
        </th>

        <th v-if="needActions">
          ações
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(row, index) in data"
        :key="index"
      >
        <td
          v-for="(key, i) in keys"
          :key="i"
        >
          <img
            v-if="photosFields.includes(key)"
            class="responsive-table-image"
            :src="row[key]"
            :alt="row[key].length || 'No image'"
          >

          <template v-else>
            {{ row[key] }}
          </template>
        </td>

        <td v-if="needActions">
          <div class="responsive-table-actions">
            <nuxt-link
              class="responsive-table-action btn-warning"
              :to="`${$route.path}/${row.slug || row.id}`"
            >
              <fa :icon="['fas', 'pen']" />
            </nuxt-link>

            <a
              class="responsive-table-action btn-danger"
              @click.prevent="handleRemove(row)"
            >
              <fa :icon="['fas', 'trash']" />
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true },
    hidden: { type: Array, default: () => ['slug', 'created_at', 'updated_at'] },
    needActions: { type: Boolean, default: true },
    photosFields: { type: Array, default: () => [] }
  },

  computed: {
    keys () {
      const arr = Object.keys(this.data[0] || {});

      return arr.filter(item => !this.hidden.includes(item));
    }
  },

  methods: {
    handleRemove (item) {
      this.$emit('remove', item);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_responsive-table';
</style>
