<template>
	<div>

		<div>
			<input type="number" placeholder="op1" v-model.number="operand1">
			<input placeholder="op2" v-model.number.lazy="operand2"/>
			={{ sum }}
		</div>
		<div>
			<button @click="sum = operand1+operand2">+</button>
			<button v-on:click="sum = operand1-operand2">-</button>
			<button @click="sum = operand1 * operand2">*</button>
			<button  @click="div">/</button>
			<button class="step"  @click="sum = Math.pow(operand1, operand2)">степень</button>
			<button class="step"  @click="sum = parseInt(operand1/operand2)">Целочисленное деление</button>
			<button @click="eventFv">Event</button>
		</div>

		result: {{ sum }}
		<!-- <div v-on:mouseover=""></div> -->

	</div>
</template>

<script>
export default {
	name: "Calc",
	data: () => ({
		operand1: 0,
		operand2: 0,
		sum: 0

	}),
	methods: {

		eventFv() {
			console.log(arguments)
		},
		div(){
			this.sum = this.operand1 / this.operand2
		}
	},
}
</script>

<style lang="scss">

</style>