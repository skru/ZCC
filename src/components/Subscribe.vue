<template>
	<div>
		<div class="arrow-down"></div>
		<div class="section content-section">
			<div class="columns">
				<div class="column">
					<br><br>
					<h2 class="is-size-2"><TagLine/> is for <span class="has-text-primary">everyone</span></h2>
					<p>
						Setup in minutes from a template or use drag-and-drop blocks to design your software. super simple!.
					</p>
					<p>
						We're launching in a few weeks. so if also excited and eager to optinmise your software development efforts,
						fill in the form and we'll give you a nudge to get on board first!
					</p>
				</div>
			</div>
			<br><br>
			<div class="columns">
				<div class="column">
					<figure class="image">
					  <img src="../assets/img/footer.png">
					</figure>
				</div>
				<div class="column">
					<SubscribeForm/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubscribeForm from '@/components/forms/SubscribeForm.vue'
import TagLine from '@/components/TagLine.vue'
export default {
  components: { SubscribeForm, TagLine },
}
</script>

<style scoped>
.arrow-down {
  left: calc(75% - 60px);
  border-top: 60px solid black;
}
</style>