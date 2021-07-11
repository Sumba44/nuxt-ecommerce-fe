<template>
  <div class="breadcrumbs__wrap">
    <div class="container px-2 px-sm-3">
      <nav class="breadcrumbs" aria-label="breadcrumbs">
        <ul class="breadcrumb">
          <li class="breadcrumb__home">
            <nuxt-link to="/">
              <font-awesome-icon
                :icon="['fas', 'home']"
                class="breadcrumbs__icon mr-1"
              />
            </nuxt-link>
          </li>
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="
              'breadcrumb__item' + (item.link === '' ? '--is-active' : '')
            "
          >
            <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
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
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.breadcrumbs__wrap {
  background-color: $bg-gray;
  margin-bottom: 20px;
}
nav.breadcrumbs {
  padding: 0;
  margin: 0;
}
nav ul.breadcrumb {
  padding: 10px 0;
  margin: 0;
  list-style: none;
  background-color: transparent;
}

ul.breadcrumb li {
  display: inline;
  font-size: 14px;
  font-weight: 300;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: #c1c1c1;
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: $blue;
  text-decoration: none;
  font-weight: 500;
}

ul.breadcrumb li a:hover {
  color: $blue;
  text-decoration: underline;
}

ul.breadcrumb li.breadcrumb__item--is-active a {
  color: initial;
  font-weight: 300;
  color: #000000;
  text-decoration: none;
  cursor: initial;
}

.breadcrumbs__wrap {
  margin-top: -8px;
}
</style>
