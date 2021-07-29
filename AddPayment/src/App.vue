<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
			<router-link to="/dashboard">Dashboard </router-link>/
			<router-link to="/about">About </router-link>/
			<router-link to="/notfound">Not Found </router-link>/
      <!-- <a href="dashboard">Dashboard / </a>
      <a href="about">About / </a>
      <a href="notFound">Not Found / </a> -->
    </div>
    <main>
			<div class="content-page">
				<router-view/>
				<!-- <About v-if="page === 'about'"/>
				<Dashboard v-if="page === 'dashboard'"/>
				<NotFound v-if="page === 'notFound'"/> -->
			</div>

      <AddPayment @addNewPayment="addData" />
      Total: {{ getFPV }}
      <CategorySelect :category="category" />
      <PaymentsDisplay :list="carrentElements" />
			<Pagination :cur="curPage" :n="n" :length="paymentsList.length" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import CategorySelect from "./components/CategorySelect.vue";
import Pagination from "./components/pagination.vue";

// import About from "./views/About.vue";
// import Dashboard from "./views/Dashboard.vue";
// import NotFound from "./views/NotFound.vue";

import AddPayment from "./components/AddPayment.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {

  name: "App",
  components: {
    PaymentsDisplay,
    AddPayment,
    CategorySelect,
    Pagination,
		// About,
		// Dashboard,
		// NotFound,
  },
	data() {
		return {
			page: '',
			curPage: 1,
			n: 10,
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
		onChangePage(p){
			this.curPage = p
		}
		// setPage() {
		// 	//Реализацыя через hash
		// 	this.page = location.hash.slice(1)
		// 	//Нативная реализация через vue
		// 	this.page = location.pathname.slice(1)

		// },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      category: "getCategoryList",
    }),
		carrentElements(){
			const { n, curPage} = this
			return this.paymentsList.slice(n * (curPage -1), n* (curPage - 1) +n)
		},
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
		const page = this.$route.params.page || 1

		this.curPage = Number(page)

		
		//Реализацыя через hash
		//* this.setPage()
		// window.addEventListener('hashchange', ()=>{
		// 	this.setPage()
		// })
		//Нативная реализация через vue
		// this.setPage()
		// const links = document.querySelectorAll('a')
		// links.forEach(link => {
		// 	link.addEventListener('click', event=>{
		// 		event.preventDefault()
		// 		history.pushState({}, "", link.href)
		// 		this.setPage()
		// 	})
		// })
		// window.addEventListener('popstate', this.setPage)
	},
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss">
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
a {
	text-decoration: none;
	color: cadetblue;
	&:hover{
		color: rgb(137, 172, 173);
	}
}
</style>
