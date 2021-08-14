<template>
	<div class="wrapper">
		<div class="header">Add</div>
		<div class="content">
			<component :is="settings.name" />
		</div>
		<div class="footer">
			<button @click="$modal.hide()"> Close </button>
		</div>
	</div>
</template>

<script>


import AddPayment from './AddPayment.vue'

export default ({
  components: { 
		AddPayment 
	},
	props: {
		settings: Object
	}
})
</script>
<style scoped lang="scss">
.wrapper {
	position: absolute;
	padding: 20px;
	top: 0;
	background: rgb(185, 185, 185);
}


</style>