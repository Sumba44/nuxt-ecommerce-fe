<template>
  <div id="comp__search" class="container mx-auto my-5 py-16">
    <div class="search__wrapper">
      <input
        v-model="search"
        type="text"
        placeholder="Search title.."
        @keydown="searchFetch()"
        @focus="searchBox = true"
        @blur="searchBox = false"
      />
      <font-awesome-icon :icon="['fas', 'search']" class="search__icon" />
      <div
        v-if="search.length > 2 && searchBox"
        class="search__results"
        @mousedown.prevent
        @click.self="searchBox = true"
      >
        <nuxt-link
          v-for="searchResult in searchResults"
          :key="searchResult.product_name"
          :to="'/' + searchResult.category_slug + '/' + searchResult.slug"
        >
          <span>{{ searchResult.product_name }}</span>
        </nuxt-link>

        <h2>Categories</h2>
        <nuxt-link
          v-for="(searchResultCat, index) in searchResultsCategories"
          :key="index"
          :to="'/' + searchResultCat.category_slug"
        >
          <span>{{ searchResultCat.category }}</span>
        </nuxt-link>
      </div>

      <div v-if="search.length > 2" class="search__results2"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
      search: '',
      searchBox: false,
      searchResults: [{ product_name: '', slug: '' }],
      searchResultsCategories: [{ category: '', category_slug: '' }],
    }
  },

  methods: {
    async searchFetch() {
      console.log(this.search.length)
      if (this.search.length > 1) {
        await axios
          .get(`http://localhost:5050/api/public/search?search=${this.search}`)
          .catch((err) => {
            console.log(err)
          })
          .then((res) => {
            this.searchResults = res.data
            console.log(this.searchResults)
          })

        await axios
          .get(
            `http://localhost:5050/api/public/searchCategories?search=${this.search}`
          )
          .catch((err) => {
            console.log(err)
          })
          .then((res) => {
            this.searchResultsCategories = res.data
            console.log(this.searchResultsCategories)
          })
      } else {
        this.searchResultsCategories = [
          { product_name: '', slug: '', category: '', category_slug: '' },
        ]
        this.searchResultsCategories = [{ category: '', category_slug: '' }]
      }
    },
  },

  //   computed: {
  //     searchResultsF: function () {
  //       return this.searchResults.filter((search) => {
  //         return search.product_name.toLowerCase().match(this.search.toLowerCase());
  //       });
  //     },
  //   },
}
</script>

<style lang="scss">
#comp__search {
  display: flex;
  justify-content: center;

  input {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    position: relative;
    width: 100%;
  }

  .search__wrapper {
    width: 100%;
    max-width: 400px;
    position: relative;
  }

  .search__results {
    position: absolute;
    background: #eee;
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 0px 5px 15px #00000026;
    padding: 7px;

    span {
      font-size: 17px;
      font-weight: 500;
      text-shadow: none;
      color: #333;
      padding: 5px;
      transition: 0.3s;
    }

    a {
      &:hover {
        background: #0000001a;
        transition: 0.3s;
      }
    }
  }

  .search__icon {
    font-size: 16px;
    position: absolute;
    margin-left: -30px;
    margin-top: 9px;
    opacity: 0.9;
  }
}
</style>
