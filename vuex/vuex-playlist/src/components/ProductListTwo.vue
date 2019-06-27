<template>
  <div id="product-list-two">
    <h2>
      Product List Two
    </h2>
    <ul>
      <li v-for="product in products">
        {{ product.name }} -
        {{ product.price }}PLN
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProductListOne",
    computed: {
      products() {
        return this.$store.state.products
      }
    }
  }
</script>

<style scoped>

</style>
