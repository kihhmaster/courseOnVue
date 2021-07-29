import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard'
import About from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/dashboard',
			component: Dashboard,
			name: 'dashboard'
		},
		{
			path: '/dashboard/:page',
			component: Dashboard,
			name: 'dashboard'
		},
		{
			path: '/',
			component: Dashboard,
			name: 'dashboard'
		},
		{
			path: '/about',
			component: About,
			name: 'about'
		},
		{
			path: '/about*',
			component: About,
			name: 'about'
		},
		{
			path:'/notfound',
			component: NotFound,
			name: 'notfound'
		},
		{
			path: '/*',
			component: NotFound,
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
