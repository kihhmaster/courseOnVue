<template>
  <div>
    <AddPayment @addNewPayment="addData" />
    Total: {{ getFPV }}
    <PaymentsDisplay :list="carrentElements" />
    <Pagination
      :cur="curPage"
      :n="n"
      :length="paymentsList.length"
      @paginate="onChangePage"
    />

  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import Pagination from "@/components/pagination.vue";
import AddPayment from "@/components/AddPayment.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {

  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPayment,
    Pagination,
		},
	data() {
		return {
			page: '',
			addFormShow: false,
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
		onClose() {
			this.addFormShow = false
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

<style>
</style>