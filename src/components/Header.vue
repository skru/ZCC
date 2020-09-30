<template>
	<div class="section content-section negative-section">
		<div class="columns is-vcentered">
			<div class="column">

				<h2 class="is-size-2"><TagLine/></h2>
				<h3 class="is-size-3">
					<strong>Business software built. 
						<span class="has-text-primary">Zero Coding</span> 
						required. 
					Drag and drop. Done</strong>

				</h3>
				<br>
				<p>Build enterprise-grade secure cloud software that grows with you, fast and absolutely coding free.</p>
				<br>
				<headerForm/>

			</div>
			<div class="column">

				<figure class="image">
				  <img src="../assets/img/header.png">
				</figure>
				
			</div>
		</div>
	</div>
</template>

<script>
import HeaderForm from '@/components/forms/HeaderForm.vue'
import TagLine from '@/components/TagLine.vue'
export default {
  components: { HeaderForm, TagLine },
}
</script>