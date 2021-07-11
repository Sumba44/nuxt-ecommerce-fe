<template>
  <div id="comp__star-rating">
    <ul class="star-rating__white">
      <li v-for="index in 5" :key="index">
        <font-awesome-icon
          :icon="['far', 'star']"
          class="star-rating__star white"
          :style="{ fontSize: size + 'px' }"
        />
      </li>
    </ul>
    <ul class="star-rating__wrap">
      <li v-for="index in rating" :key="index">
        <font-awesome-icon
          :icon="['fas', 'star']"
          class="star-rating__star"
          :style="{ fontSize: size + 'px' }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
    size: Number,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
#comp__star-rating {
  position: relative;
}

.star-rating__white {
  list-style: none;
  display: flex;
  padding-left: 0 !important;
}

.star-rating__wrap {
  position: absolute;
  top: 0;
  list-style: none;
  display: flex;
  padding-left: 0 !important;
}

.star-rating__star {
  color: #ffbf09;

  &.white {
    color: #ffbf09;
  }
}
</style>
