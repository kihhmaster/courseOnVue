<template>
	<div class="payments-list">
		<div class="wrapp-list__title">
			<div class="list__title">#</div>
			<div class="list__title">Date</div>
			<div class="list__title">Category</div>
			<div class="list__title">Value</div>
		</div>
		<div class="wrapp-list__item" v-for="(item, idx) in list" :key="idx">
			<div class="list__item">{{ idx + 1 }}</div>
			<div class="list__item">{{ item.date}}</div>
			<div class="list__item">{{ item.category}}</div>
			<div class="list__item">{{ item.value}}</div>
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
	}
}
</script>


<style lang="scss" scoped>
.payments-list {
	width: 100%;
	max-width: 600px;
}
.wrapp-list__item {
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

</style>