<template>
	<div class="payments-list">
		<div class="wrapp-list__title">
			<div class="list__title">#</div>
			<div class="list__title">Date</div>
			<div class="list__title">Category</div>
			<div class="list__title">Value</div>
		</div>
		<div class="wrapp-list__item" v-for="(item, idx) in list" :key="idx">
			<div class="list__item">{{ item.id }}</div>
			<div class="list__item">{{ item.date}}</div>
			<div class="list__item">{{ item.category}}</div>
			<div class="list__item">{{ item.value}}</div>
	
			<button class="list__button" @click="showModalMenu">
				<p>.</p>
				<p>.</p>
				<p>.</p>
			</button>
		</div>

	</div>
</template>

<script>
export default {
	name: "PaymentsDisplay",
	props: {
		list: {
			type: Array,
			default: ()=>[]
		}
	},

	data() {
		return {
			
		}
	},
	methods: {
		showModalMenu() {
			this.$modal.show("ModalMenuPaymentsList", {header: "Menu item"})
		}
	},
}
</script>


<style lang="scss" scoped>
.payments-list {
	position: relative;
	width: 100%;
	max-width: 600px;
}
.wrapp-list__item {
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: row;
	border-bottom: 1px solid black;
	width: 100%;
	&:nth-child(even) {
		background: rgb(250, 249, 249);
	}

}
.wrapp-list__title {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: row;
	border-bottom: 1px solid black;
}

.list__title {
	width: 150px;
	margin: 10px;
	font-size: 18px;
	font-weight: bold;
}
.list__item {
	width: 150px;
	margin: 10px;

}
.list__button {
	align-self: center;
	display: flex;
	font-size: 30px;
	flex-direction: column;
	padding: 0;
	width: 30px;
	height: 30px;

	background: transparent;
	border: none;
	p {
		margin: 0;
		padding: 0;
		line-height: 0.2;
	}

}

</style>