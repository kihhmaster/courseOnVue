<template>
	<div>

		<div>
			<input type="number" placeholder="op1" v-model.number="operand1">
			<input placeholder="op2" v-model.number.lazy="operand2"/>
			={{ result }}
		</div>
		<div>
			<button @click="calculate = ('+')">+</button>
			<button v-on:click="calculate = ('-')">-</button>
			<button @click="calculate = ('*')">*</button>
			<button  @click="calculate = ('/')">/</button>
			<button class="step"  @click="result = Math.pow(operand1, operand2)">степень</button>
			<button class="step"  @click="result = parseInt(operand1/operand2)">Целочисленное деление</button>
			<button @click="eventFv">Event</button>
		</div>

		result: {{ result }}
		<!-- <div v-on:mouseover=""></div> -->

	</div>
</template>

<script>
export default {
	name: "Calc",
	data: () => ({
		operand1: 0,
		operand2: 0,
		result: 0

	}),
	methods: {

		// eventFv() {
		// 	console.log(arguments)
		// },
		calculate(operation = "+") {
			switch(operation) {
				case "+":
					this.add()
					break;
				case "-":
					this.substract()
					break;
				case "*":
					this.multiply()
					break;
				case "/":
					this.divide()
					break;
				

			}

		},
		add() {
			this.result = this.operand1 + this.operand2 
		},
		substract() {
			this.result = this.operand1 - this.operand2 
		},
		multiply() {
			this.result = this.operand1 * this.operand2 
		},
		divide(){
			if(this.operand2 > 0) {
				this.result = this.operand1 / this.operand2
			}else {
				alert('Деление на 0 запрещено!!!')
			}
			
		}
	},
}
</script>

<style lang="scss">

</style>