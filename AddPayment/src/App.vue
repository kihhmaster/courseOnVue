<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
      <a href="#dashboard">Dashboard / </a>
      <a href="#about">About / </a>
      <a href="#notFound">Not Found / </a>
    </div>
    <main>
			<div class="content-page">
				<About v-if="page === 'about'"/>
				<Dashboard v-if="page === 'dashboard'"/>
				<NotFound v-if="page === 'notFound'"/>
			</div>
      <Pagination />
      <AddPayment @addNewPayment="addData" />
      Total: {{ getFPV }}
      <CategorySelect :category="category" />
      <PaymentsDisplay :list="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import CategorySelect from "./components/CategorySelect.vue";
import Pagination from "./components/pagination.vue";

import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import NotFound from "./views/NotFound.vue";

import AddPayment from "./components/AddPayment.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {

  name: "App",
  components: {
    PaymentsDisplay,
    AddPayment,
    CategorySelect,
    Pagination,
		About,
		Dashboard,
		NotFound,
  },
	data() {
		return {
			page: ''
		}
	},
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentsList"]),
    ...mapActions(["fetchData", "fetchCategory"]),
    addData(data) {
      // this.paymentsList.push(data)
      // this.paymentsList = [...this.paymentsList, data]
      this.addDataToPaymentsList(data);
    },
		setPage() {
			this.page = location.hash.slice(1)
		},
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      category: "getCategoryList",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    // paymentsList() {
    // 	return this.$store.getters.getPaymentList
    // }
  },
  created() {
    // this.$store.commit('setPaymentListData', this.fetchData())
    //можно и так , только после спред оператора строка 29
    // this.setPaymentListData(this.fetchData())
    // this.paymentsList = this.fetchData()
    //имитация сервера
    this.$store.dispatch("fetchData");
    //Подмешиваем метод строка 32
    this.fetchData();
    if (!this.category.length) {
      this.fetchCategory();
    }
  },
	mounted() {
		this.setPage()
		window.addEventListener('hashchange', ()=>{
			this.setPage()
		})
	},
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
<style>
@import url("https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap");
#app {
  font-family: "Otomanopee One", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
