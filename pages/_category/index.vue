<template>
  <div id="category">
    <MenuTop />
    <Header />
    <Breadcrumbs :items="breadcrumbs" />

    <div class="container mx-auto mt-5">
      <div class="row">
        <div class="col-md-12">
          <h6>Games</h6>
          <h2 class="mb-5">{{ category[0].category_name }}</h2>
          <p v-html="category[0].category_info"></p>
          <div v-if="results" id="category-filter" class="my-8">
            <v-btn
              color="primary"
              :outlined="!activeBtn1"
              @click="
                removeActive()
                activeBtn1 = !activeBtn1
                sortProducts('rating', 'desc')
              "
              >Most popular</v-btn
            >
            <v-btn
              color="primary"
              :outlined="!activeBtn2"
              @click="
                removeActive()
                activeBtn2 = !activeBtn2
                sortProducts('price', 'asc')
              "
              >Price Low to High</v-btn
            >
            <v-btn
              color="primary"
              :outlined="!activeBtn3"
              @click="
                removeActive()
                activeBtn3 = !activeBtn3
                sortProducts('price', 'desc')
              "
              >Price High to Low</v-btn
            >
            <v-btn
              color="primary"
              :outlined="!activeBtn4"
              @click="
                removeActive()
                activeBtn4 = !activeBtn4
                sortProducts('rating', 'desc')
              "
              >Top Rated</v-btn
            >
          </div>
          <div v-if="results" class="row">
            <nuxt-link
              v-for="product in products"
              :key="product.product_id"
              :to="category[0].category_slug + '/' + product.slug"
              class="col-md-3 category__product-wrap"
            >
              <CategoryProduct :product="product" />
            </nuxt-link>
          </div>
          <div
            v-else
            class="container d-flex flex-column justify-center align-center"
          >
            <h1>404</h1>
            <h5>This category has no products :(</h5>
            <br />
            <nuxt-link to="/">Return to homepage</nuxt-link>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <br />
            <!-- <Pagination :items="pagination" /> -->
            <br />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios"
import MenuTop from "~/components/MenuTop.vue"
import Header from "~/components/Header.vue"
import Breadcrumbs from "~/components/Breadcrumbs.vue"
import CategoryProduct from "~/components/CategoryProduct.vue"
// import Pagination from "~/components/Pagination.vue";
import Footer from "~/components/Footer.vue"

export default {
  components: {
    MenuTop,
    Header,
    Breadcrumbs,
    CategoryProduct,
    // Pagination,
    Footer,
  },

  async asyncData({ params, error }) {
    let productsFetchStatus = true
    const productsFetch = await axios
      .get(
        `http://localhost:5050/api/public/getallproductsincategory/${params.category}?type=rating&sort=desc`
      )
      .catch((err) => {
        productsFetchStatus = false
      })

    let categoryFetchStatus = true
    const categoryFetch = await axios
      .get(
        `http://localhost:5050/api/public/getcategory?slug=${params.category}`
      )
      .catch((err) => {
        categoryFetchStatus = false
        // error({ statusCode: 404, message: err.message });
      })

    return {
      products:
        productsFetchStatus &&
        productsFetch.data.data.length != 0 &&
        productsFetch.data.data != undefined
          ? productsFetch.data.data
          : "This category has no products :(",
      results:
        productsFetchStatus &&
        productsFetch.data.data.length != 0 &&
        productsFetch.data.data != undefined
          ? true
          : false,
      category:
        categoryFetchStatus &&
        categoryFetch.data.length != 0 &&
        categoryFetch.data != undefined
          ? categoryFetch.data
          : [
              {
                category_slug: params.category,
                category: "Category does not exist",
                info: "",
              },
            ],
    }
  },

  data() {
    return {
      pagination: [
        { link: "/brands", text: "1" },
        { link: "", text: "2" },
      ],
      results: false,
      activeBtn1: true,
      activeBtn2: false,
      activeBtn3: false,
      activeBtn4: false,
    }
  },

  head() {
    return {
      title: this.category[0].category_name + " || vue-ecommerce.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Product page meta description",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "product, page, meta, keywords",
        },
      ],
    }
  },

  computed: {
    breadcrumbs() {
      const links = [
        {
          link: "/" + this.category[0].category_slug,
          text: this.category[0].category_name,
        },
      ]
      // this.$route.params
      return links
    },
  },

  methods: {
    async sortProducts(sortBy, sortMethod) {
      // console.log(sortMethod);
      this.$nuxt.$loading.start()
      await axios
        .get(
          `http://localhost:5050/api/public/getallproductsincategory/${this.category[0].category_slug}?type=${sortBy}&sort=${sortMethod}`
        )
        .catch((error) => {
          console.log(error)
        })
        .then((res) => {
          this.products = res.data.data
          this.$nuxt.$loading.finish()
        })
    },

    // async fetchPagination(sortBy, sortMethod, size, page) {
    //   this.$nuxt.$loading.start();
    //   await axios
    //     .get(
    //       `http://localhost:5050/api/public/getallproductsincategory/${this.category[0].category_slug}?size=${size}&page=${page}&type=${sortBy}&sort=${sortMethod}`
    //     )
    //     .catch(error => {
    //       console.log(error);
    //     })
    //     .then(res => {
    //       this.products = res.data.data;
    //       this.$nuxt.$loading.finish();
    //     });
    // },

    removeActive() {
      this.activeBtn1 = false
      this.activeBtn2 = false
      this.activeBtn3 = false
      this.activeBtn4 = false
    },
  },
}
</script>

<style lang="scss"></style>
