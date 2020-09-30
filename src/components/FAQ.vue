<template>
	<div>
		<div class="arrow-down"></div>
		<div class="section content-section">
			<div class="columns">
				<div class="column">
					<br><br>
					<h1 class="is-size-2">
						FAQs
					</h1>
					<h2 class="is-subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis efficitur purus. Maecenas tempor lacus vel diam vestibulum euismod. Nam at neque in nulla suscipit consequat et eu libero. Aliquam in justo at eros dapibus fringilla nec sed nulla. Curabitur luctus odio risus, vel gravida mi pharetra eget. Nulla at nulla at lectus accumsan euismod. Morbi molestie lorem purus, ac fermentum est tempor sed.
					</h2>
				</div>
			</div>
			<br><br>


			<div class="columns">
				<div id="faq-accordion" class="column">
					<article class="message box" v-for="(faq, index) in faqs" :key="faq.index">
			
						<a :href="'#collapsible-message-accordion-'+index" data-action="collapse" >
						<div class="message-header">
							<p>{{ faq.question }} </p>
							<span class="icon text-is-right">
							  <i class="fas fa-arrow-down"></i>
							</span>
						</div>
						</a>
						<div :id="'collapsible-message-accordion-'+index"  class="message-body is-collapsible" data-parent="faq-accordion">
							<div class="message-body-content">
								{{ faq.answer }}
							</div>
						</div>

					</article>
				</div>
				<div class="column">
					<figure class="image">
					  <img src="../assets/img/faq.png">
					</figure>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

export default {
  components: { bulmaCollapsible },
  data() {
    return {
      faqs: 
      	[
	  		{question: "Question 1",
	      	 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis efficitur purus. Maecenas tempor lacus vel diam vestibulum euismod. Nam at neque in nulla suscipit consequat et eu libero. Aliquam in justo at eros dapibus fringilla nec sed nulla. Curabitur luctus odio risus, vel gravida mi pharetra eget. Nulla at nulla at lectus accumsan euismod. Morbi molestie lorem purus, ac fermentum est tempor sed."
      		},
      		{question: "Question 2",
	      	 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis efficitur purus. Maecenas tempor lacus vel diam vestibulum euismod. Nam at neque in nulla suscipit consequat et eu libero. Aliquam in justo at eros dapibus fringilla nec sed nulla. Curabitur luctus odio risus, vel gravida mi pharetra eget. Nulla at nulla at lectus accumsan euismod. Morbi molestie lorem purus, ac fermentum est tempor sed."
      		},
      		{question: "Question 3",
	      	 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis efficitur purus. Maecenas tempor lacus vel diam vestibulum euismod. Nam at neque in nulla suscipit consequat et eu libero. Aliquam in justo at eros dapibus fringilla nec sed nulla. Curabitur luctus odio risus, vel gravida mi pharetra eget. Nulla at nulla at lectus accumsan euismod. Morbi molestie lorem purus, ac fermentum est tempor sed."
      		},
      		{question: "Question 4",
	      	 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis efficitur purus. Maecenas tempor lacus vel diam vestibulum euismod. Nam at neque in nulla suscipit consequat et eu libero. Aliquam in justo at eros dapibus fringilla nec sed nulla. Curabitur luctus odio risus, vel gravida mi pharetra eget. Nulla at nulla at lectus accumsan euismod. Morbi molestie lorem purus, ac fermentum est tempor sed."
      		},
      	],
    };
  },
  mounted() {
    const collapsibles = bulmaCollapsible.attach();
  },
}
</script>

<style scoped>
.message-header {
	background: white;
	color: black;
}
.message-header p {
	width: 100%;
	text-align: left;
}
.message {
    background: white;
}
.arrow-down {
  left: calc(25% - 60px);
  border-top: 60px solid black;
}
</style>