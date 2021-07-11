<template>
  <div>
    <v-toolbar dense color="transparent">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <Search />

      <v-spacer></v-spacer>

      <nuxt-link to="/contact" class="mr-md-10 menu__item">
        <!-- <font-awesome-icon :icon="['fas', 'user']" class="menu__icon mr-2" /> -->
        Contact us!
      </nuxt-link>

      <nuxt-link to="/login" class="mr-md-5">
        <font-awesome-icon :icon="['fas', 'user']" class="menu__icon mr-2" />
        <!-- <span>Sign In / Sign Up</span> -->
      </nuxt-link>

      <nuxt-link to="/cart" class="d-flex">
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          class="menu__icon mr-2"
        />

        <!-- <div>Cart</div> -->
        <v-avatar
          v-if="cartOrders"
          color="success"
          size="22"
          class="cart__avatar"
          >{{ cartOrders.length }}</v-avatar
        >
        <!-- <span v-if="cartOrders">{{ cartOrders.length }}</span> -->
      </nuxt-link>

      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="menu__icon mr-2 menu__drawer"
        style="font-size: 26px"
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute right temporary dark>
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search";
export default {
  components: {
    Logo,
    Search
  },

  data() {
    return {
      cartOrders: this.$store.state.orders,
      drawer: false
    };
  }

  // methods: {

  //   recalculateTotals() {
  //     this.cartOrders = this.$store.state.orders
  //   },
  // },

  // watch: {
  //   cartOrders: function () {
  //     this.cart = this.cartOrders.length()
  //   },
  // },
};
</script>

<style lang="scss">
nav.navbar {
  background: #1e1e24;
}

.v-navigation-drawer--temporary {
  z-index: 12;
}

.cart__avatar {
  font-size: 12px;
  left: -16px;
  top: -13px;
  box-shadow: 1px 1px 5px #0000004f;
}

.v-icon.v-icon.header__menu {
  color: rgba(255, 255, 255, 0.849);
  text-decoration: none;
  font-size: 22px;
}

.menu__drawer {
  color: rgba(255, 255, 255, 0.849);
  cursor: pointer;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
}

.v-toolbar__title {
  overflow: initial;
}

.menu__item {
  font-size: 18px;
  font-weight: 700;
}
</style>
