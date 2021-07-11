<template>
  <div class="supplier">
    <h2>{{ supplierName }}</h2>
    <div v-if="supplierLogo" class="supplier__logo">
      <img :src="supplierLogo" />
    </div>
    <div v-html="supplierDesc"></div>
  </div>
</template>

<script>
export default {
  props: {
    supplierName: {
      type: String,
      default: ''
    },
    supplierDesc: {
      type: String,
      default: ''
    },
    supplierLogo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.supplier {
  padding: 20px 30px;
  background: #fff;
  margin-top: 45px;
  margin-bottom: 45px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #efefef;
}
</style>
