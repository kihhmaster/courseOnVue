<template>
	<div class="wrapp-modalMenu">
		<button class="modalMenu__item" @click="editItem">Edit</button>
		<button class="modalMenu__item">Delete</button>
	</div>
</template>

<script>

export default ({
	name: "PaymentsListModalMenu",
	methods: {
		editItem() {
			this.$modal.show('EditPayment' , {header: "Edit Payment"})
		}
	},
	// props: [property],

})
</script>

<style>
	.wrapp-modalMenu {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.modalMenu__item {
		width: 100px;
		height: 30px;
		margin: 5px;
	}
</style>