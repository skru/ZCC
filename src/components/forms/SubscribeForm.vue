<template>

	<form class="generic-form">

		<div class="field">
		  <label class="label">full name</label>
		  <div class="control box form-box">
		    <input class="input" type="text" placeholder="Your name">
		  </div>
		</div>

		<div class="field">
		  <label class="label">Email</label>
		  <div class="control box form-box">
		    <input class="input" type="email" placeholder="email@domain.com">
		  </div>
		</div>

		

		<div class="field">
		  <label class="label">Business</label>
		  <div class="control box form-box">
		    <div class="select is-fullwidth">
		      <select>
		        <option>Select dropdown</option>
		        <option>With options</option>
		      </select>
		    </div>
		  </div>
		</div>

		<div class="field">
		  <label class="label">Job Position</label>
		  <div class="control box form-box">
		    <div class="select is-fullwidth">
		      <select>
		        <option>Select dropdown</option>
		        <option>With options</option>
		      </select>
		    </div>
		  </div>
		</div>

		<div class="field">
		  <label class="label">How did you hear about us?</label>
		  <div class="control box form-box">
		    <div class="select is-fullwidth">
		      <select>
		        <option>Select dropdown</option>
		        <option>With options</option>
		      </select>
		    </div>
		  </div>
		</div>

		<div class="field">
		  <label class="label">Message</label>
		  <div class="control box form-box">
		    <textarea class="textarea" placeholder="Textarea"></textarea>
		  </div>
		</div>

		<div class="field">
		  <div class="control box">
		    <label class="checkbox">
		      <input type="checkbox">
		      I agree to the <a href="#">terms and conditions</a>
		    </label>
		  </div>
		</div>

		<div class="field">
		  <div class="control box form-box">
		    <button class="button primary-button is-primary is-fullwidth">
		    	<span class="primary-button-text">Get me on the list!</span>
		    	<span class="icon is-small">
			      <i class="fas fa-arrow-right"></i>
			    </span>
		
		    </button>
		  </div>
		</div>
	</form>

</template>

<style scoped>
.form-box {
	padding: 0 !important;
}
</style>