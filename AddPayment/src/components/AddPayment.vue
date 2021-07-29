<template>

	<div class="wrapp-input">
		<div class="wrapp-add__data" v-if="show == false">

			<input class="input-add__data" v-model="date" placeholder="Date"/>
			<CategorySelect  :categories="categories"/>

			<input class="input-add__data" v-model.number="value" type="number" placeholder="Value"/>

			<button class="button-add__data" @click="onclick">Add Data +</button>
		</div>
	<button  id="button-addData__show" @click="addDataShow()">Add new Cost +</button>
	</div>
</template>
<script>

import CategorySelect from "./CategorySelect.vue";
import { mapGetters, mapActions } from "vuex";


export default {
	name: "AddPayment",
	data() {
		return {
			date: "",
			category: "",
			value: null,
			show: true
		}
	},
	components: {
		CategorySelect,
	},
	methods: {
		...mapActions([
			'fetchCategory'
		]),
		addDataShow() {
			if(this.show == true) {
				this.show = false
				const buttonShow = document.querySelector('#button-addData__show')
				buttonShow.style.background = "#35495e"
				buttonShow.style.width = "30px"
				buttonShow.innerText = "X"
				
			}else  {
				this.show = true
				this.date = ""
				this.category = ""
				this.value = null
				const buttonShow = document.querySelector('#button-addData__show')
				buttonShow.style.width = "150px"
				buttonShow.style.background = "cadetblue"
				buttonShow.innerText = "Add new Cost +"
			}
		},
		onclick() {
			const { category, value } = this
			const data = {
				date: this.date || this.getCurrentDate,
				category,
				value
			}
			this.$emit('addNewPayment', data)
			
		}
	},
	computed: {
		...mapGetters({
		paymentsList: 'getPaymentList',
		categories: 'getCategoryList'
		}),
		getCurrentDate() {
			const today = new Date()
			const d = today.getDate()
			const m = today.getMonth()+1
			const y =today.getFullYear()
			return `${d}.${m}.${y}`
		}
	},
	created() {
		if(!this.category.length) {
			this.fetchCategory()
		}
	},
}
</script>

<style lang="scss">
.wrapp-add__data {
	width: 100%;
	max-width: 300px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	&>select{
		margin-bottom: 10px;
		height: 32px;
		border: 1px solid rgb(185, 185, 185);
		width: 100%;
		&::placeholder {
		color: rgb(185, 185, 185);
		}
	}
}
.input-add__data {
	margin-bottom: 10px;
	height: 30px;
	border: 1px solid rgb(185, 185, 185);
	&::placeholder {
		color: rgb(185, 185, 185);
	}

}
.button-add__data {
	height: 30px;
	width: 150px;
	align-self: flex-end;
	margin: 5px;
	background: cadetblue;
	border: none;
	border-radius: 5px;
	color: #fff;
}
.wrapp-input {
	display: flex;
	justify-content: center;
	align-items: center;
}
#button-addData__show {
	height: 30px;
	width: 150px;
	align-self: flex-start;
	margin: 5px;
	background: cadetblue;
	border: none;
	border-radius: 5px;
	color: #fff;
}
</style>