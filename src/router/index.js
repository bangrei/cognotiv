import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import MainPage from "../components/MainPage.vue";

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "HomePage",
		component: HomePage,
	},
    {
		path: "/page",
		name: "MainPage",
		component: MainPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
