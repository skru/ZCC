<template>
  <div class="home">
    <Header/>
    <About/>
    <Products/>
    <FAQ/>
    <Subscribe/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Products from '@/components/Products.vue'
import FAQ from '@/components/FAQ.vue'
import Subscribe from '@/components/Subscribe.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Products,
    FAQ,
    Subscribe
  }
}
</script>
