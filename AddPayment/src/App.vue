<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
		
    <main>
			<AddPayment @addNewPayment="addData"/>
      <PaymentsDisplay :list="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPayment from "./components/AddPayment.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
		AddPayment,
  },
  data: () => ({
    paymentsList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),
  methods: {
		addData (data){
			this.paymentsList.push(data)
		},
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "28.03.2020",
          category: "Sport",
          value: 1690,
        },
        {
          date: "28.03.2020",
          category: "Car",
          value: 900,
        },
        {
          date: "28.03.2020",
          category: "Family",
          value: 9000,
        },
      ];
    },
  },
	created() {
		this.paymentsList = this.fetchData()
	},
};
</script>

<style lang="scss" module>
@import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');
#app {
  font-family: 'Otomanopee One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: flex;
	flex-direction: column;
}
</style>
