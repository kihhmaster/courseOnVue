<template>
	<div>

		<div class="operWrap">
			<div class="operItem">
				<input type="number" placeholder="op1" @focus="picked='true'" v-model.number="operand1"/>
				<div>
					<input type="radio" id="one" value="true" v-model="picked">
					<label for="one">operand1</label> {{ picked }}
				</div>
			</div>


			<div class="operItem">
				<input type="number" placeholder="op2" @focus="picked='false'" v-model.number="operand2"/>
				<div>
					<input type="radio" id="two" value="false" v-model="picked">
					<label for="two">operand2</label>
				</div>
				
			</div>
			

		</div>

		<div class="buttons">
			<button v-for="btn in buttons" :key="btn" @click="calculate(btn)" v-bind:title="btn">{{ btn }}</button>
		</div>
    
		<div class="error" v-if="error">
		ошибка:	{{ error }}
		</div>

		<div class="result">
			Результат: {{ result }} 
		</div>
		<div class="strange-message" v-if="result">
			<template v-if="result < 0">Отрицательное число</template>
			<template v-else-if="result < 100">Число меньше 100</template>
			<template v-else>Число больше 100</template>
		</div>

		<div class="keyboard">
			<input type="checkbox" id="checkbox" v-model="checked">
			<label for="checkbox">
				клавиатура
			</label>
			<div class="collectionKey" v-if="checked" >
				<button @click="keyboardEvent(idx)" v-for="(item, idx) in collection" :key="idx" >
					{{ item }}
				</button>
				<button class="backspace" @click="delSimvol()">backspace</button>
			</div>
			
		</div>
		<div class="wrapLogs">
			<div class="logs">
				{{ logs }}
			</div>
		</div>



		<!-- <div v-on:mouseover=""></div> -->

	</div>
</template>

<script>
export default {
	name: "Calc",
	data: () => ({
		operand1: 0,
		operand2: 0,
		result: 0,
		buttons: ['+', "-", "*", "/"],
		collection: [1,2,3,4,5,6,7,8,9],
		fibResult: 0,
		logs: {},
		checked: false,
		picked: "true",
		error: ""

	}),
	methods: {
		// fib(n){
		// 	return n <=1 ? n : this.fib(n-1) + this.fib(n-2)
		// },
		keyboardEvent(idx) {
			if (this.picked == "true") {
				this.operand1 = parseInt(this.operand1 + (idx + 1).toString())
			}else {
				this.operand2 = parseInt(this.operand2 + (idx + 1).toString())
			}

		},
		delSimvol() {
			if (this.picked == "true" && this.operand1 !=0 ) {
				this.operand1 = parseInt((this.operand1.toString()).slice(0, -1))
			}else if (this.picked == "false" && this.operand2 !=0 ) {
				this.operand2 = parseInt((this.operand2.toString()).slice(0, -1))
			}
		},
		calculate(operation = "+") {
			this.error = ""
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

			const key = Date.now()
			const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`
			this.$set(this.logs, key, value)
		},
		add() {
			this.result = this.operand1 + this.operand2 
			// this.fibResult = this.fib(this.operand1) + this.fib(this.operand2)
			// this.fibResult =  this.fib1 + this.fib2
		},
		substract() {
			this.result = this.operand1 - this.operand2 
			// this.fibResult =  this.fib1 - this.fib2
		},
		multiply() {
			this.result = this.operand1 * this.operand2 
		},
		divide(){
			const { operand1, operand2 } = this
			if(operand2 === 0) {
				this.error = 'Деление на 0 запрещено!!!'
				
			}else {
				this.result = operand1 / operand2
			}
			
		}
	},
	computed: {
		fib1() {
			return this.fib(this.operand1)
		},
		fib2() {
			return this.fib(this.operand2)
		}
	},
}
</script>

<style lang="scss" scoped>
.strange-message {
	margin: 10px;
	font-size: 18px;
	color: rgb(73, 196, 128);
}
.result {
	margin: 10px;
	font-size: 24px;
}
.operWrap {
	display: flex;
	align-items: center;
	justify-content: center;
}
.operItem {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 250px;
}
.error {
	color: red
}
.buttons {
	display: flex;
	justify-content: center;
}
.collectionKey {

	display: flex;
	justify-content: center;
  margin: 10px;
	button{
		margin: 2px;
	}
}
.wrapLogs {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.logs {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
	font-size: 8px;
}

</style>