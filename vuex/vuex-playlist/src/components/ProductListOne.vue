<template>
  <div id="product-list-one">
    <h2>
      Product List One
    </h2>
    <ul>
      <li v-for="product in saleProducts">
        {{ product.name }}<br>
        {{ product.price }}PLN
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce price</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "ProductListOne",
    computed: {
      products() {
        return this.$store.state.products
      },
      /*
      saleProducts() {
        return this.$store.getters.saleProducts
      } */
      ...mapGetters([
        'saleProducts',
      ])
    },
    methods: {
      /*
      reducePrice: function(amount) {
        this.$store.dispatch('reducePrice', amount)
      } */
      ...mapActions([
        'reducePrice',
      ])
    }
  }
</script>

<style scoped>

</style>
