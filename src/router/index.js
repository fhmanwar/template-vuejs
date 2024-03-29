import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";

// lazy-loaded
// const Profile = () => import("./components/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
		path: "/login",
		component: Login,
	},
	// {
	// 	path: "/register",
	// 	component: Register,
	// },
	// {
	// 	path: "/profile",
	// 	name: "profile",
	// 	// lazy-loaded
	// 	component: Profile,
	// },
	// {
	// 	path: "/admin",
	// 	name: "admin",
	// 	// lazy-loaded
	// 	component: BoardAdmin,
	// },
	// {
	// 	path: "/mod",
	// 	name: "moderator",
	// 	// lazy-loaded
	// 	component: BoardModerator,
	// },
	// {
	// 	path: "/user",
	// 	name: "user",
	// 	// lazy-loaded
	// 	component: BoardUser,
	// },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
	const publicPages = ['/login', '/register', '/home'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	// trying to access a restricted page + not logged in
	// redirect to login page
	if (authRequired && !loggedIn) {
		next('/login');
	} else {
		next();
	}
});


export default router
