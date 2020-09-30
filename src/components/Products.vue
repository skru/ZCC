<template>
	<div>
		<div class="arrow-down"></div>
		<div class="section content-section negative-section has-text-centered">
			
			<div class="columns">
				<div class="column">
					<br><br>
					<h1 class="is-size-2">
						With us, you're open for business!
					</h1>
					<h2 class="is-subtitle">
						All essential modern business requirements included out-of-the box,
						so you can simply focus on growing your business.
					</h2>
				</div>
			</div>
			<br><br>
			<vueper-slides 
			  autoplay
			  class="no-shadow"
			  :bullets="false"
			  :visible-slides="3"
			  :gap="3"
			  :slide-ratio="1 / 4"
			  :dragging-distance="200"
			  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 1 } }">
			  <vueper-slide v-for="(product, i) in products" :key="i" :image="product.image" :title="product.title" :content="product.content"/>
			</vueper-slides>
			<br><br>
			<a href="/" class="button is-primary is-medium">More Info</a>
		</div>
	</div>
</template>

<script>
//https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      products: 
      	[
	  		{title: "Save time",
	      	 image: require("../assets/img/products-1.png")
      		},
      		{title: "Make data-driven business decisions",
	      	 image: require("../assets/img/products-1.png")
      		},
      		{title: "Build quicker",
	      	 image: require("../assets/img/products-1.png")
      		},
      		{title: "All-in-one infrastucture",
	      	 image: require("../assets/img/products-1.png")
      		},
      		
      	]
    };
  }
}
</script>