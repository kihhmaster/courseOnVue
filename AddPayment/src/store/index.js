import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		paymentsList: [],
		categoryList: []
	},

	mutations: {
		setPaymentListData(state, payload) {
			state.paymentsList = payload
		},
		addDataToPaymentsList(state, payload) {
			state.paymentsList.push(payload)
		},
		delateDataPaymentsList(state, payload) {
			state.paymentsList.slice(payload)
		},
		setCategoryList(state, Payload) {
			state.categoryList = Payload
		}

	},
	//возвращает данные из state
	getters: {
		getPaymentList: state => state.paymentsList,
		getFullPaymentValue: state => {
			return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)
		},
		getCategoryList: state=>state.categoryList
	},
	//Позволяет получать данные из источников, что то делать с ними
	actions: {
		fetchData({commit}) {
			return new Promise((resolve)=> {
				setTimeout(()=>{
					const items = []
					for(let i = 1; i<50; i++) {
						items.push({
							date: "23.10.2021",
							category: "Food",
							value: i,
							id: i
						})
					}
					resolve(items)
				},2000)
			}).then(res=>{
				commit('setPaymentListData', res)
			})
		},
		fetchCategory({commit}) {
			return new Promise((resolve)=>{
				setTimeout(()=>{
					resolve(['Food', 'Sports', 'Home', 'Auto', 'Family'])
				},1000)
			}).then(res=> {
				commit('setCategoryList', res)
			})
		}
	}
})