<template>
  <header class="site-header">
    <div class="container">
      <div class="row align-items-center py-2">
        <div class="brand-logo mx-2 col-sm-2">
          <img src="/assets/logos/Logo.png" alt="C&G atacado logo">
        </div>

        <div class="col-sm-10 row">
          <nav class="menu-navbar co-md-12">
            <ul class="menu-desktop">
              <li
                v-for="(menu, index) in menus"
                :key="index"
                class="menu-item"
                :class="{ active: $route.path === menu.href }"
              >
                <nuxt-link
                  :to="menu.href"
                  class="menu-link"
                >
                  {{ menu.text }}
                </nuxt-link>
              </li>
              <span class="line" />
            </ul>
          </nav><!--menu-navbar-->

          <div class="row align-items-center justify-content-between col-md-12 row">
            <div class="navbar-search col-8 px-0">
              <form @submit.prevent>
                <div class="input-group">
                  <input class="form-field small icon" type="text" name="search_value" placeholder="Procure por uma categoria ou um produto :)" required>

                  <fa :icon="['fas', 'search']" class="help-icon" />

                  <input class="btn" type="submit" name="search" value="Buscar">
                </div>
              </form>
            </div>

            <div class="navbar-user">
              <ul class="user-menu row align-items-center">
                <li class="menu-item">
                  <Dropdown>
                    <template v-slot:toggle>
                      <fa :icon="['fas', 'user-circle']" />
                    </template>

                    <template
                      v-if="!$auth.loggedIn"
                      v-slot:default
                    >
                      <li class="dropdown-item">
                        <nuxt-link to="/login">
                          <fa :icon="['fas', 'sign-in-alt']" />

                          Logar
                        </nuxt-link>
                      </li>

                      <li class="dropdown-item">
                        <nuxt-link to="/register">
                          <fa :icon="['fas', 'user-plus']" />

                          Cadastrar-se
                        </nuxt-link>
                      </li>
                    </template>

                    <template
                      v-else
                      v-slot:default
                    >
                      <li class="dropdown-item">
                        <a href="#" @click.prevent="$auth.logout()">
                          <fa :icon="['fas', 'sign-in-alt']" />

                          Logout
                        </a>
                      </li>

                      <li class="dropdown-item">
                        <nuxt-link to="/me">
                          <fa :icon="['fas', 'sign-in-alt']" />

                          Minha conta
                        </nuxt-link>
                      </li>
                    </template>
                  </Dropdown>
                </li>

                <li class="menu-item">
                  <Dropdown>
                    <template v-slot:toggle>
                      <fa :icon="['fas', 'heart']" />
                    </template>

                    <li class="dropdown-item">
                      Lista de desejos aqui
                    </li>
                  </Dropdown>
                </li>

                <li class="menu-item">
                  <Dropdown>
                    <template v-slot:toggle>
                      <nuxt-link to="/cart" class="icon-count">
                        <fa :icon="['fas', 'shopping-cart']" />

                        <span class="count">
                          {{ cartItems.length }}
                        </span>
                      </nuxt-link>
                    </template>

                    <li
                      v-for="product in cartProducts"
                      :key="product.id"
                      class="dropdown-item"
                    >
                      <nuxt-link :to="`/product/${product.slug}`">
                        {{ product.name }}
                        -
                        {{ (product.price * product.quantity).toFixed(2) }}
                      </nuxt-link>
                    </li>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import Dropdown from '~/components/Dropdown.vue';

export default {
  components: {
    Dropdown
  },

  data: () => ({
    menus: [
      { text: 'home', href: '/' },
      { text: 'contato', href: '/contact' },
      { text: 'sobre', href: '/about' },
      { text: 'produtos', href: '/products' }
    ]
  }),

  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItems',
      cartProducts: 'cart/cartProducts'
    })
  }
};
</script>
