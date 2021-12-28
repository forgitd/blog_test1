import Vue from 'vue'
import VueRouter from 'vue-router'

const Welcome = () => import("../views/blog/Welcome")
const BlogPage = () => import("../views/blog/BlogPage")
const Header = () => import("../views/blog/Header")
const BlogDetail = () => import("../views/blog/BlogDetail")
const Article = () => import("../views/more/Articles")
const Links = () => import("../views/more/Links")
const Music = () => import("../views/more/Music")
const Aboutme = () => import("../views/game/Aboutme")
const Jottings = () => import("../views/game/Jottings")
const Login = () => import("../views/blog/Login")
const WriteBlog = () => import("../views/blog/WriteBlog")
const Index = () => import("../views/manage/index")

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
    path: "/write",
    component: WriteBlog
  },
  {
    path: "/index",
    component: Index
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/blogPage",
    component: BlogPage,
    children: [
      {path: "articles", component: Article},
      {path: "links", component: Links},
      {path: "music", component: Music},
    ]
  },
  {
    path: "/header",
    component: Header
  },
  {
    path: "/detail",
    component: BlogDetail
  },
  {
    path: "/aboutme",
    component: Aboutme
  },
  {
    path: "/jottings",
    component: Jottings
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router