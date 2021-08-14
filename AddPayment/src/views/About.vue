<template>
  <div>
    About

    <button @click="showPaymentsForm">Show Payments Form</button>
    <button @click="closePaymentsForm">close</button>
  </div>
</template>

<script>
export default ({
	name: "About",
	methods: {
		showPaymentsForm(){
			this.$modal.show('addPayment', {header: "Add"})
		},
		closePaymentsForm() {
			this.$modal.hide()
		},
	},
	
})
</script>

<style>
</style>