<template>
  <header>
    <form
      class="navbar-search-form"
      @submit.prevent
    >
      <input type="text" class="navbar-search-field">

      <button type="submit" class="navbar-search-btn">
        <fa :icon="['fas', 'search']" />
      </button>
    </form>

    <ul class="navbar-menu">
      <li class="navbar-menu-item tooltip" data-tooltip="Come back to site">
        <nuxt-link to="/">
          <fa :icon="['fas', 'home']" />
        </nuxt-link>
      </li>

      <li class="navbar-menu-item">
        <fa :icon="['far', 'bell']" />
      </li>

      <li class="navbar-menu-item">
        <fa :icon="['far', 'envelope-open']" />
      </li>

      <li class="navbar-menu-item">
        <base-dropdown :is-list="false" class="right">
          <template #toggle>
            <fa :icon="['far', 'user-circle']" />
          </template>

          <template #default>
            <div class="navbar-menu-user">
              <span class="navbar-menu-user-profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbMwn_ie7saauxGwBvXYeTvnmgZ_5intvKUi96B8ieinwfgl0K&usqp=CAU" alt="user picture">
              </span>

              <h1 class="navbar-menu-user-name">
                {{ $auth.user.name }}
              </h1>

              <h3 class="navbar-menu-user-role">
                {{ $auth.user.role }}
              </h3>
            </div>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </header>
</template>

<script>
import BaseDropdown from '~/components/BaseDropdown.vue';

export default {
  components: { BaseDropdown },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/page-components/dashboard-header';
</style>
