<template>
	<div class="section content-section has-text-centered">
		<div class="columns">
			<div class="column">
				<br><br>
				<h1 class="is-size-2">
					We are here for you
				</h1>
				<h2 class="is-subtitle">
					Technology is pervasive, so is progressive intent.
					Businesses and individuals that care about efficiency build websites, apps, and webservices
					on the Zero Code Cloud.
				</h2>
			</div>
		</div>
		<br><br>
		<div class="columns is-multiline is-variable is-8-desktop">
			<div class="column is-4" v-for="about in abouts" :key="about.title">
				<figure class="image container is-128x128">
				  <img :src="about.image">
				</figure>
				<br>
			    <p><strong>{{ about.title }}</strong></p>
			    <p v-html="about.description"></p>
			</div>

		</div>

	</div>
</template>

<script>
export default {
  data() {
    return {
      abouts: 
      	[
	  		{"title": "Save time",
	      	 "description": "eliminate time spent building a team, setting up processes, and waiting.. indefinitely, for software to be delivered",
	      	 "image": require("../assets/img/about-1.png")
      		},
      		{"title": "Make data-driven business decisions",
	      	 "description": "Use observed business system execution data to inform business operations",
	      	 "image": require("../assets/img/about-2.png")
      		},
      		{"title": "Build quicker",
	      	 "description": "Go from no software, to secure cloud software that scales according to your business needs in minutes",
	      	 "image": require("../assets/img/about-3.png")
      		},
      		{"title": "All-in-one infrastucture",
	      	 "description": "Database, file storage, user access, encryption, security, maintenance etc, all taken care of out of the box",
	      	 "image": require("../assets/img/about-4.png")
      		},
      		{"title": "Alert everything",
	      	 "description": "Be notified by SMS or email when pre-specified events occurs in your business process",
	      	 "image": require("../assets/img/about-5.png")
      		},
      		{"title": "Extremely personal support",
	      	 "description": "<span class='is-italic'>Your issues are our issues</span> because ZeroCloud also runs on the ZeroCodeCloud<sup>TM</sup>",
	      	 "image": require("../assets/img/about-6.png")
      		},
      	]
      
    };
  }
  // name: 'About',
}
</script>