<template>
  <div id="comp__category-product">
    <div class="category__sticker__wrap">
      <div
        v-if="product.sale != 0"
        class="category__sticker category__sticker--sale"
      >
        Sale -{{ product.sale }}%
      </div>
    </div>
    <div
      class="product__miniature"
      :style="{ backgroundImage: `url(${product.product_image})` }"
    ></div>
    <div class="product__miniature-body">
      <StarRating :rating="parseInt(product.rating.toFixed(0))" :size="13" />
      <h4>{{ product.product_name.substring(0, 40) + ".." }}</h4>
      <!-- <span>{{ product.category }}</span> -->

      <div class="d-flex align-center">
        <div class="category__product__price">
          {{
            parseFloat(product.price * ((100 - product.sale) / 100))
              .toFixed(2)
              .replace(".", ",")
          }}
          €
        </div>
        <div
          v-if="product.sale != 0"
          class="category__product__price--before ml-2"
        >
          ({{ parseFloat(product.price).toFixed(2).replace(".", ",") }}) €
        </div>
      </div>

      <div class="d-flex align-center justify-space-between mt-3">
        <span v-if="product.quantity >= 1" class="product__stock"
          >In stock</span
        >
        <span v-else class="product__stock out-of-stock">Out of stock</span>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "~/components/StarRating.vue"

export default {
  components: {
    StarRating,
  },

  props: {
    product: {},
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.product__miniature-body {
  margin: 0;
  // padding: 15px;
}

#comp__category-product {
  // box-shadow: 0px 4px 14px rgb(25 118 210 / 19%);
  // box-shadow: 0px 5px 11px rgb(0 0 0 / 11%);
  position: relative;

  h4 {
    font-size: 17px;
    font-weight: 500;
    text-shadow: none;
    line-height: 18px;
    display: block;
    margin-top: 7px;
    height: 38px;
    color: #333;
  }

  span {
    color: #333;
    font-weight: 300;
    font-size: 12px;
  }

  span.product__stock {
    color: $success;
    font-weight: 500;
    font-size: 12px;

    &.out-of-stock {
      color: #b64242;
    }
  }
}

.category__sticker__wrap {
  position: absolute;
  top: 20px;
  margin-left: -1px;
}

.category__sticker {
  color: #fff;
  padding: 4px 7px;
  font-size: 13px;
  box-shadow: 1px 1px 3px #00000036;
  margin: 4px 0;
  font-weight: 500;

  &.category__sticker--sale {
    background: $danger;
  }

  &.category__sticker--action {
    background: $warning;
  }

  &.category__sticker--success {
    background: $success;
  }

  &.product__sticker--primary {
    background: $blue;
  }
}

.category__product__price {
  font-size: 25px;
  font-weight: 600;
  color: #2d8e40;
}

.category__product__price--before {
  color: #000;
  text-decoration: line-through;
}

.product__miniature {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  height: 265px;
}

.category__product-wrap {
  text-decoration: none;

  &:hover {
    color: $blue;
    text-shadow: none;
  }
}

.category__filters {
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.05882);
  padding: 30px 25px 10px 5px;
  min-height: 540px;

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    padding: 5px 0;
    color: #333;
  }

  h5 {
    margin: 30px 0 30px 0;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 15px;
  }
}

.price__slider {
  margin-bottom: 60px;
}
</style>
