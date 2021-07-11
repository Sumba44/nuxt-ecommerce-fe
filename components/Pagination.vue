<template>
  <div class="container mx-auto my-5 py-16">
    <div class="row justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li v-for="(item, index) in items" :key="index" class="page-item">
            <nuxt-link :to="item.link" class="page-link">
              {{ item.text }}
            </nuxt-link>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Last</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      products: [],
    }
  },

  methods: {
    async fetchPagination(sortBy, sortMethod, size, page) {
      this.$nuxt.$loading.start()
      await axios
        .get(
          `http://localhost:5050/api/public/getallproductsincategory/${this.category[0].category_slug}?size=${size}&page=${page}&type=${sortBy}&sort=${sortMethod}`
        )
        .catch((error) => {
          console.log(error)
        })
        .then((res) => {
          this.products = res.data.data
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>
