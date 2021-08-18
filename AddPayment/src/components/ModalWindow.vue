<template>
	<div class="wrapper">
		<div class="header">{{ settings.header}} </div>
		<div class="content">
			<component 
			:is="settings.name" 
			:property="settings"
      @addNewPayment="eventEmmit"
			/>
		</div>
		<div class="footer">
			<button @click="$modal.hide()"> Х </button>
		</div>
	</div>
</template>

<script>


import EditPayment from './EditPayment.vue'
import AddPayment from './AddPayment.vue'
import ModalMenuPaymentsList from './ModalMenuPaymentsList.vue'

export default ({
  components: { 
		AddPayment,
		ModalMenuPaymentsList,
		EditPayment
	},
	props: {
		settings: Object
	},
	methods: {
    eventEmmit(data) {
      console.log(data);
    }
  }
})
</script>
<style scoped lang="scss">
.wrapper {
	width: 100%;
	max-width: 400px;
	position: absolute;
	padding: 20px;
	top: 50vh;
	left: 50%;
	background: #faf9f9;
	border: 1px solid cadetblue;
}
.footer {
	position: absolute;
	right: 5px;
	top: 5px;
	button {
		background: rgb(53, 73, 94);
		color: #faf9f9;
		border: none;
		width: 30px;
		height: 30px;
		border-radius: 5px
	}
}


</style>