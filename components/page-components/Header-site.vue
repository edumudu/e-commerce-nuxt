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
              <li class="menu-item">
                <nuxt-link class="menu-link" to="/">
                  home
                </nuxt-link>
              </li>

              <li class="menu-item">
                <nuxt-link class="menu-link" to="/contact">
                  contato
                </nuxt-link>
              </li>

              <li class="menu-item">
                <nuxt-link class="menu-link" to="/about">
                  sobre
                </nuxt-link>
              </li>

              <li class="menu-item">
                <nuxt-link class="menu-link" to="/products">
                  produtos
                </nuxt-link>
              </li>

              <span class="line" />
            </ul>
          </nav><!--menu-navbar-->

          <div class="row align-items-center justify-content-between col-md-12 row">
            <div class="navbar-search col-8 px-0">
              <form @submit.prevent>
                <div class="form-group">
                  <input class="form-field icon" type="text" name="search_value" placeholder="Procure por uma categoria ou um produto :)" required>

                  <fa :icon="['fas', 'search']" class="help-icon" />

                  <input class="btn" type="submit" name="search" value="Buscar">
                </div>
              </form>
            </div>

            <div class="navbar-user">
              <ul class="user-menu row align-items-center">
                <li class="menu-item">
                  <Dropdown>
                    <template slot="toggle">
                      <fa :icon="['fas', 'user-circle']" />
                    </template>

                    <li class="dropdown-item">
                      <nuxt-link to="login">
                        <fa :icon="['fas', 'sign-in-alt']" />

                        Logar
                      </nuxt-link>
                    </li>

                    <li class="dropdown-item">
                      <nuxt-link to="register">
                        <fa :icon="['fas', 'user-plus']" />

                        Cadastrar-se
                      </nuxt-link>
                    </li>
                  </Dropdown>
                </li>

                <li class="menu-item">
                  <Dropdown>
                    <template slot="toggle">
                      <fa :icon="['fas', 'heart']" />
                    </template>

                    <li class="dropdown-item">
                      Lista de desejos aqui
                    </li>
                  </Dropdown>
                </li>

                <li class="menu-item">
                  <Dropdown>
                    <template slot="toggle">
                      <nuxt-link to="/cart" class="icon-count">
                        <fa :icon="['fas', 'shopping-cart']" />

                        <span class="count">2</span>
                      </nuxt-link>
                    </template>

                    <li class="dropdown-item">
                      Carrinho aqui
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
import Dropdown from '~/components/Dropdown.vue'

export default {
  components: {
    Dropdown
  }
}
</script>
