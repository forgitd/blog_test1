import Vue from 'vue'
import VueRouter from 'vue-router'

const Welcome = () => import("../views/Welcome")
const BlogPage = () => import("../views/BlogPage")
const Header = () => import("../views/Header")
const BlogDetail = () => import("../views/BlogDetail")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/Welcome"
  },
  {
    path: "/Welcome",
    component: Welcome
  },
  {
    path: "/blogPage",
    component: BlogPage
  },
  {
    path: "/header",
    component: Header
  },
  {
    path: "/detail",
    component: BlogDetail
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router