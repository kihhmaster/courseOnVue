import Vue from 'vue'
import Router from 'vue-router'

// import Dashboard from '../views/Dashboard'
// import About from '../views/About'
// import NotFound from '../views/NotFound'
// import AddPayment from '../components/AddPayment'
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/add/payment/:category/',
			component: ()=>import(/*webpackChunkName: 'AddPayment'*/'../components/AddPayment.vue'),
			name: 'addpayment'
		},
		{
			path: '/dashboard',
			component: ()=>import(/*webpackChunkName: 'Dashboard'*/'../views/Dashboard.vue'),
			name: 'dashboard'
		},
		{
			path: '/dashboard/:page',
			component:  ()=>import(/*webpackChunkName: 'Dashboard'*/'../views/Dashboard.vue'),
			name: 'dashboard'
		},

		{
			path: '/about*',
			component:  ()=>import(/*webpackChunkName: 'About'*/'../views/About.vue'),
			name: 'about'
		},
		{
			path:'/notfound',
			component: ()=>import(/*webpackChunkName: 'NotFound'*/'../views/NotFound'),
			name: 'notfound'
		},
		{
			path: '*',
			component: ()=>import(/*webpackChunkName: 'NotFound'*/'../views/NotFound'),
			name: 'notfound'
		}
	]
})

// const isAnth = false

// router.beforeEach((to, from, next)=>{
// 	if (to.name !== 'NotFound' && !isAnth) {
// 	next({path: '/notfound'})
// 	}else{
// 	next()
// 	}
// 	console.log(to, from, next)
// })

// router.beforeResolve((to, from, next)=>{
// 	console.log(to, from, next)
// })

const getTitle = routName => {
	return{
		'dashboard': 'Take a look on your payments and add more!',
    'about': 'Anything about our awesome application!',
    'notFound': 'Oops! Seems like we lost this page :('
	}[routName]
}

router.afterEach((to)=>{
	document.title =getTitle(to.name)
})

export default router
