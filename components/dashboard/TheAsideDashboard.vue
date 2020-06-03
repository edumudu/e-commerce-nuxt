<template>
  <aside>
    <div class="enterprise-logo">
      <img src="/assets/logos/Logo.png" alt="cg atacado logo" class="logo">

      cg atacado
    </div>

    <aside-menu>
      <aside-menu-item
        title="Dashboard"
        :icon="['fas', 'chart-line']"
        :is-active="/\/admin$/.test(path)"
      >
        <li class="menu-subtree-item" :class="{ active: path === '/admin' }">
          <nuxt-link to="/admin" class="menu-link">
            Visão geral
          </nuxt-link>
        </li>
      </aside-menu-item>

      <aside-menu-item
        title="category"
        :icon="['fas', 'boxes']"
        :is-active="path.includes('/category')"
      >
        <li class="menu-subtree-item" :class="{ active: path === '/admin/category' }">
          <nuxt-link to="/admin/category" class="menu-link">
            Gerenciar categorias
          </nuxt-link>
        </li>

        <li class="menu-subtree-item" :class="{ active: path === '/admin/category/create' }">
          <nuxt-link to="/admin/category/create" class="menu-link">
            Cadastrar categoria
          </nuxt-link>
        </li>
      </aside-menu-item>

      <aside-menu-item
        title="genre"
        :icon="['fas', 'transgender-alt']"
        :is-active="path.includes('/genre')"
      >
        <li class="menu-subtree-item" :class="{ active: path === '/admin/genre/info' }">
          <nuxt-link to="/admin/genre/info" class="menu-link">
            Visão geral
          </nuxt-link>
        </li>

        <li class="menu-subtree-item" :class="{ active: path === '/admin/genre' }">
          <nuxt-link to="/admin/genre" class="menu-link">
            Gerenciar gêneros
          </nuxt-link>
        </li>

        <li class="menu-subtree-item" :class="{ active: path === '/admin/genre/create' }">
          <nuxt-link to="/admin/genre/create" class="menu-link">
            Cadastrar gênero
          </nuxt-link>
        </li>
      </aside-menu-item>

      <aside-menu-item
        title="Product"
        :icon="['fas', 'tshirt']"
        :is-active="path.includes('/product')"
      >
        <li class="menu-subtree-item" :class="{ active: path === '/admin/product' }">
          <nuxt-link to="/admin/product" class="menu-link">
            Gerenciar produto
          </nuxt-link>
        </li>

        <li class="menu-subtree-item" :class="{ active: path === '/admin/product/create' }">
          <nuxt-link to="/admin/product/create" class="menu-link">
            Cadastrar produto
          </nuxt-link>
        </li>
      </aside-menu-item>
    </aside-menu>
  </aside>
</template>

<script>
import AsideMenu from '~/components/dashboard/menu/AsideMenu.vue';
import AsideMenuItem from '~/components/dashboard/menu/AsideMenuItem.vue';

export default {
  components: {
    AsideMenu,
    AsideMenuItem
  },

  computed: {
    path () {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/page-components/dashboard-aside';
</style>
