<template>
  <div>
    <div class="container">
      <h1>Login Page</h1>
      <nuxt-link to="/">Home</nuxt-link>
      <!-- <p>{{ this.$store.state.orders }}</p> -->

      <p>{{ orders }}</p>

      <div v-for="order in orders" :key="order.id">
        <img :src="order.cart.cover" style="width: 75px" alt="cover" />
        <p>{{ order.time }}</p>
        <p>{{ order.cart.name }}</p>
        <p>{{ order.cart.id }}</p>
        <p>{{ order.cart.price }}</p>
        <p>{{ order.cart.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  components: {},

  data() {
    return {
      orders: this.$store.state.orders,
    }
  },

  methods: {},

  // computed: mapState({
  //   getOrders: state => state.orders
  // })
}
</script>

<style lang="scss"></style>
