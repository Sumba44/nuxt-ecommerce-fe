<template>
  <div id="cart">
    <MenuTop />
    <Header />
    <Breadcrumbs :items="breadcrumbs" />
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <h1>Shopping Cart</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-stepper alt-labels elevation="8">
            <v-stepper-header>
              <v-stepper-step step="3" complete> Ad type </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="4" complete> Ad style </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="5">
                Custom channels
                <small>Alert message</small>
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-if="orders.length < 1"
          class="d-flex justify-content-center align-items-center"
        >
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </v-col>
        <v-col v-else cols="12" md="8">
          <div v-if="orders.length >= 1">
            <div
              v-for="(order, index) in orders"
              :key="order.id"
              class="col-12 shopping-cart__wrap"
            >
              <nuxt-link :to="order.category + '/' + order.slug">
                <div
                  class="shopping-cart__image"
                  :style="{ backgroundImage: `url(${order.cover})` }"
                ></div>
              </nuxt-link>
              <div>
                <nuxt-link :to="order.category + '/' + order.slug">
                  <h5>{{ order.name }}</h5>
                </nuxt-link>
                <div class="shopping-cart__product-code">
                  code: {{ order.id }}
                </div>
                <div class="shopping-cart__current-price text-success">
                  {{ order.price * order.quantity }}€
                </div>
                <p class="shopping-cart__info-label">
                  <b>Unit price:</b>
                  {{ order.price }}€
                </p>
                <p>
                  <b>Quantity:</b>
                  {{ order.quantity }}pcs
                </p>
              </div>
              <button
                type="button"
                class="shopping-cart__delete"
                @click="deleteOrder(index)"
              >
                <v-icon>mdi-trash-can</v-icon>
              </button>
            </div>
          </div>
          <div v-else>Your shopping cart is empty</div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="shopping-cart__total">
            <h3>Cart totals</h3>
            <hr />
            <div class="cart__pricebox">
              <span class="cart__label">Price (tax excl.):</span>
              <span class="price__subtotal">
                <b>{{ (totalPrice * 0.8).toFixed(2) }}€</b>
              </span>
            </div>
            <div class="cart__pricebox">
              <span class="cart__label">Shipping:</span>
              <span class="price__subtotal">
                <b>0.00€</b>
              </span>
            </div>
            <hr />
            <div class="cart__pricebox">
              <span class="cart__label">
                <b>Total price:</b>
              </span>
              <span class="price__total text-success"
                >{{ totalPrice.toFixed(2) }}€</span
              >
            </div>
            <v-btn color="success mt-8 mb-5" large block @click="sendOrder()"
              >Checkout</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import axios from 'axios';
import Header from '~/components/Header.vue';
import MenuTop from '~/components/MenuTop.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    MenuTop,
    Header,
    Breadcrumbs,
    Footer
  },

  data() {
    return {
      orders: this.$store.state.orders,
      totalOrder: 0,
      totalPrice: 0.0
    };
  },

  computed: {
    breadcrumbs() {
      const links = [
        {
          link: '/cart/',
          text: 'Shopping Cart'
        }
      ];
      return links;
    }
  },

  // watches for this.orders changes
  watch: {
    orders() {
      this.recalculateTotals();
    }
  },

  // calculates totals on page load
  mounted: {
    reCalTotals() {
      this.recalculateTotals();
    }
  },

  methods: {
    // delete order from cart
    deleteOrder(index) {
      this.$store.commit('DELETE_ORDER', index);
    },

    // calculate totals
    recalculateTotals() {
      let sum = 0;
      for (let i = 0; i < this.$store.state.orders.length; i++) {
        sum +=
          parseFloat(this.$store.state.orders[i].price) *
          this.$store.state.orders[i].quantity;
      }
      this.totalPrice = sum;
    },

    formatDate(date) {
      const hours = date.getHours();
      const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      const strTime = hours + ':' + minutes;
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' ' +
        strTime
      );

      // var d = new Date();
      // var e = formatDate(d);
    },

    // Send order to backend
    async sendOrder() {
      const date = this.formatDate(new Date());

      await axios
        .post(
          'http://localhost:5050/api/public/addorder',
          {
            id: null,
            cart: this.$store.state.orders,
            date
          },
          {
            headers: {
              'Content-type': 'application/json'
            }
          }
        )
        .catch((e) => {
          console.log(e);
        })
        .then((response) => {
          console.log('Order was sent successfully!');
        });
    }
  }
};
</script>

<style lang="scss">
.cart__pricebox {
  display: flex;
  align-items: center;

  .cart__label {
    width: 150px;
  }

  .price__total {
    font-weight: 500;
    font-size: 29px;
  }
}
.shopping-cart__wrap {
  display: flex;
  border-bottom: 1px solid #e0e0e096;
  padding: 25px 0;

  h5 {
    font-size: 21px;
    color: #000000db;
  }
}

.shopping-cart__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid #f3f3f3;
  height: 179px;
  width: 144px;
  margin-right: 20px;
}

.shopping-cart__delete {
  align-self: flex-start;
  margin-left: auto;
}

.shopping-cart__info-label {
  font-size: 15px;
  margin: 0;
}

.shopping-cart__total {
  box-shadow: -5px 5px 7px rgba(0, 0, 0, 0.05882);
  padding: 30px 10px 10px 30px;
  min-height: 300px;
}

.shopping-cart__current-price {
  font-weight: 500;
  font-size: 24px;
  margin: 10px 0;
}

.shopping-cart__product-code {
  font-weight: 300;
  font-size: 13px;
  margin-top: -7px;
  text-transform: uppercase;
}
</style>
