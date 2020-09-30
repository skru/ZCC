<template>
<form class="generic-form" @submit.prevent="subscribeUser">
	<div class="field">
	  <label class="label">Email</label>
	  <div class="control">
	    <input class="input" v-model="email" type="email" placeholder="email@domain.com">
	  </div>
	</div>

	<div class="field">
	  <label class="label">Business</label>
	  <div class="control">
	    <input class="input" v-model="business" type="text" placeholder="Your Business">
	  </div>
	</div>

	<div class="field">
	  <label class="label">Job Position</label>
	  <div class="control">
	    <div class="select is-fullwidth">
	      <select v-model="jobTitle">
	        <option>Select dropdown</option>
	        <option>With options</option>
	      </select>
	    </div>
	  </div>
	</div>
	<div class="field">
	  <div class="control">
	    <button type="submit" class="button primary-button is-primary is-fullwidth">
	    	<span class="primary-button-text">Get me on the list!</span>
	    	<span class="icon is-small">
		      <i class="fas fa-arrow-right"></i>
		    </span>
	
	    </button>
	  </div>
	</div>
</form>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      email: "",
      business: "",
      jobTitle: "",
    };
  },
  methods: {
	  subscribeUser() {
	      let self = this;
	      axios
	        .post("external/api/...", self.$data)
	        .then(function (response) {
	          // handle success
	        })
	        .catch(function (error) {
	          if (error.response) {
	            if (error.response.data){
	              // handle form errors 
	              self.$data.errors = error.response.data
	            }
	          } 
	        });
	    },
	}
}
</script>