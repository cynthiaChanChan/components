<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
    	<ul class="nav">
	    	<li>
	    		<!-- use router-link component for navigation. -->
	    		<!-- specify the link by passing the `to` prop. -->
	    		<!-- <router-link> will be rendered as an `<a>` tag by default -->
	    		<router-link to="/datePicker">DatePicker</router-link>
	    	</li>
	    	<li>
	    		<router-link to="/toggle">Toggle</router-link>
	    	</li>
	    </ul>
	    <!-- route outlet -->
  		<!-- component matched by the route will render here -->
  		<router-view></router-view>
    </div>
  </div>
</template>

<style src="./assets/css/app.css"/>