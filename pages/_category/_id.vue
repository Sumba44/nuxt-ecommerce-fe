<template>
  <div id="product">
    <MenuTop />
    <Header />
    <Breadcrumbs :items="breadcrumbs" />

    <div v-if="results">
      <v-container>
        <v-row class="m-0">
          <v-col
            cols="12"
            md="6"
            class="product__image"
            :style="{
              'background-image': 'url(' + product[0].product_image + ')'
            }"
          >
            <div class="product__sticker__wrap">
              <div
                v-if="product[0].sale != 0"
                class="product__sticker product__sticker--sale"
              >
                Sale -{{ product[0].sale }}%
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="product__box">
            <h1 class="product__heading">{{ product[0].product_name }}</h1>
            <div class="product__code mb-2">
              ID:
              {{ product[0].product_id }}
            </div>

            <StarRating
              :rating="parseInt(product[0].rating.toFixed(0))"
              :size="16"
            />

            <div class="product__prices mt-5">
              <div class="d-flex align-center">
                <div class="product__price text-success">
                  <span class="current-price-display"
                    >{{
                      parseFloat(
                        product[0].price * ((100 - product[0].sale) / 100)
                      )
                        .toFixed(2)
                        .replace(".", ",")
                    }}
                    €</span
                  >
                </div>
                <div
                  v-if="product.sale != 0"
                  class="product__price--before ml-5"
                >
                  ({{
                    parseFloat(product[0].price).toFixed(2).replace(".", ",")
                  }}) €
                </div>
              </div>
              <div class="product__tax">Tax included</div>
            </div>

            <div class="product__short-description"></div>
            <div class="product-features">
              <dl class="data-sheet">
                <dt class="name">Release date</dt>
                <dd class="value">12.12.2020</dd>
                <dt class="name">Developer</dt>
                <dd class="value">Some developer</dd>
              </dl>
            </div>

            <div class="product__availability">
              <h5 class="text-success">
                In Stock
                <span>{{ product[0].quantity }} pcs</span>
              </h5>
              <p>
                Next day delivery
                <font-awesome-icon
                  :icon="['fas', 'info-circle']"
                  class="info__icon"
                />
              </p>
              <p class="product__digital-sub"></p>
            </div>

            <div class="product-add-to-cart">
              <div
                class="
                  product-quantity
                  flex-column flex-md-row
                  row
                  align-center
                  no-gutters
                "
              >
                <div class="qty col-auto vnis__wrapper">
                  <!-- <client-only>
                    <NumberInputSpinner
                      v-model="quantity"
                      :min="0"
                      :max="10"
                      :step="1"
                      :integer-only="true"
                    />
                  </client-only> -->
                </div>

                <div class="col">
                  <nuxt-link to="/cart">
                    <v-btn color="success" x-large block @click="addToCart()">
                      <font-awesome-icon
                        :icon="['fas', 'shopping-cart']"
                        class="menu__icon"
                      />
                      <span
                        class="btn-add-to-cart__spinner"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Add to cart
                    </v-btn>
                  </nuxt-link>
                </div>
              </div>
              <p class="product-minimal-quantity"></p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Media box -->
      <div class="container">
        <div class="row media-row product__media">
          <div class="col-12 col-md-4 media-benefit">
            <div class="media-left">
              <font-awesome-icon :icon="['fas', 'smile']" class="media__icon" />
            </div>
            <div class="media-body">
              <h5 class="h5 font-blue">Diseños previos</h5>
              <p>Gratis y no personalizaremos nada hasta tener tu aprobado</p>
            </div>
          </div>
          <div class="col-12 col-md-4 media-benefit">
            <div class="media-left">
              <font-awesome-icon
                :icon="['fas', 'business-time']"
                class="media__icon"
              />
            </div>
            <div class="media-body">
              <h5 class="h5 font-blue">Entrega en fecha siempre</h5>
              <p>
                Compromiso firme pues
                <strong>te pondremos la fecha por escrito</strong>
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 media-benefit">
            <div class="media-left">
              <font-awesome-icon :icon="['fas', 'truck']" class="media__icon" />
            </div>
            <div class="media-body">
              <h5 class="h5 font-blue">Portes Gratis</h5>
              <p>
                El envío de tus regalos
                <strong>será gratis</strong> si supera los 99€ de compra
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Product details -->
      <div class="container">
        <v-row>
          <v-col>
            <iframe
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/' + product[0].product_video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
        <div class="row">
          <div class="col">
            <h2>Product Information</h2>
            <!-- eslint-disable-next-line -->
            <div v-html="product[0].long_desc"></div>
          </div>
        </div>
        <Supplier
          :supplier-name="product[0].supplier_name"
          :supplier-desc="product[0].supplier_desc"
          :supplier-logo="product[0].supplier_logo"
        />
      </div>
    </div>
    <div
      v-else
      class="container d-flex flex-column justify-center align-center"
    >
      <h1>404</h1>
      <h5>{{ product[0].product_name }}</h5>
      <br />
      <nuxt-link to="/">Return to homepage</nuxt-link>
      <br />
      <br />
    </div>
    <Footer />
  </div>
</template>

<script>
// import axios from "axios";

export default {

  scrollToTop: true,

  async asyncData({ $axios, params, error }) {
    const productFetch = await $axios
      .get(`http://localhost:5050/api/public/getproduct/${params.id}`)
      .catch(err => {
        console.log(err);
        return {
          results: false
        };
      });
    return {
      product:
        Object.keys(productFetch.data).length > 0 &&
        productFetch.data !== undefined
          ? productFetch.data
          : {
              product_name: "This product doesnt exist",
              category_slug: "",
              category: ""
            },
      results: !!(
        Object.keys(productFetch.data).length > 0 &&
        productFetch.data !== undefined
      )
    };
  },

  data: () => {
    return {
      game: null,
      price: Math.floor(Math.random() * 50 + 9),
      quantity: 1,
      results: false
    };
  },

  head() {
    return {
      title: this.product[0].product_name + " || vue-ecommerce.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Product page meta description"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "product, page, meta, keywords"
        }
      ]
    };
  },

  // created() {
  //   console.log(this.$route.params.category);
  // },

  computed: {
    breadcrumbs() {
      const links = [
        {
          link: "/" + this.$route.params.category,
          text: this.$route.params.category
        }
      ];
      links.push({ link: "", text: this.product[0].product_name });
      return links;
    }
  },

  methods: {
    addToCart() {
      this.$store.commit("SET_CART", {
        date: Date.now(),
        cover: this.product.background_image,
        name: this.product.name,
        id: this.product.id,
        price: this.price,
        quantity: this.quantity,
        category: this.product.genres[0].name,
        slug: this.product.slug
      });
    }
  }
};
</script>

<style lang="scss">
.vnis__wrapper {
  @media (max-width: 959px) {
    width: 100%;
    margin: 0 0 28px 0 !important;
  }
}

.vnis__wrapper .vnis__button {
  color: #505050 !important;

  &:last-child {
    font-size: 16px;
  }
}

.product__sticker__wrap {
  position: absolute;
  top: 50px;
  left: 0;
  margin-left: -3px;
}

.product__sticker {
  color: #fff;
  padding: 7px 19px;
  font-size: 16px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.21176);
  margin: 5px 0;
  font-weight: 500;

  &.product__sticker--sale {
    background: $danger;
  }

  &.product__sticker--action {
    background: $warning;
  }

  &.product__sticker--success {
    background: $success;
  }

  &.product__sticker--primary {
    background: $primaryblue;
  }
}

.product__price {
  letter-spacing: -2px;
  font-size: 36px;
  font-weight: 600;
  color: #2d8e40;
}

.product__price--before {
  color: #000;
  text-decoration: line-through;
  font-size: 20px;
}

.product__heading {
  margin-bottom: 5px;
  line-height: 40px;
}

.product__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #f3f3f3;
  border-right: none;
  min-height: 300px;
  position: relative;
}

.product__tax {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  margin-top: 15px;
}

.product__code {
  font-weight: 300;
  font-size: 14px;
}

.product__availability {
  background-color: #f8f8f8;
  padding: 15px;
  margin-top: 58px;
  margin-bottom: 20px;
  box-shadow: -5px 5px 7px rgba(0, 0, 0, 0.05882);

  h5 {
    font-weight: 500;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 15px;
  }
}

.product__box {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #efefef;
  padding: 30px 30px 10px 30px;
  min-height: 540px;
}

.product__media {
  padding: 20px 30px;
  background: #fff;
  margin-top: 45px;
  margin-bottom: 45px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #efefef;

  .media-benefit {
    margin-bottom: 0;
    margin: 15px 0;
    display: flex;
    align-items: center;
  }
}

.media-body {
  h5 {
    color: $primaryblue;
    margin-bottom: 0;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 0;
  }
}

.media-left {
  margin-right: 15px;

  .media__icon {
    font-size: 45px;
    color: $primaryblue;
  }
}

.vnis__wrapper {
  height: 42px;
}
</style>
