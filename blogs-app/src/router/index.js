import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import EditBlog from '../views/EditBlog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',
    name: 'show-Blog',
    component: Blog,
    params: true
  },
  {
    path: '/blogs/:id/edit',
    name: 'edit-Blog',
    component: EditBlog,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
