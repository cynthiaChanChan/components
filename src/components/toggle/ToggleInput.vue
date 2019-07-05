<template>
	<span class="toggle flex-no-shrink" role="checkbox" tabindex="0" 
		:aria-checked="toggled.toString()" 
		@click="toggle" 
		@keydow.space.prevent="toggle">		
	</span>
</template>

<script>
	export default {
		model: {
			prop: 'toggled',
			event: 'toggle'
		},
		props: ['toggled'],
		methods: {
			toggle() {
				this.$emit('toggle', !this.toggled);
			}
		}
	}
</script>