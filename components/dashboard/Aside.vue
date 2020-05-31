<template>
  <aside>
    <div class="enterprise-logo">
      <img src="/assets/logos/Logo.png" alt="cg atacado logo" class="logo">

      cg atacado
    </div>

    <Menu>
      <menu-item
        title="Dashboard"
        :icon="['fas', 'chart-line']"
        :is-active="/\/admin$/.test(path)"
      >
        <li class="menu-subtree-item" :class="{ active: path === '/admin' }">
          <nuxt-link to="/admin" class="menu-link">
            Visão geral
          </nuxt-link>
        </li>

        <li class="menu-subtree-item" :class="{ active: path === '/' }">
          <nuxt-link to="/admin" class="menu-link">
            menu-2
          </nuxt-link>
        </li>
      </menu-item>

      <menu-item
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
      </menu-item>

      <menu-item
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
      </menu-item>

      <menu-item
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
      </menu-item>
    </Menu>
  </aside>
</template>

<script>
import Menu from '~/components/dashboard/menu/Menu.vue';
import MenuItem from '~/components/dashboard/menu/MenuItem.vue';

export default {
  components: {
    Menu,
    MenuItem
  },

  computed: {
    path () {
      return this.$route.path;
    }
  }
};
</script>
