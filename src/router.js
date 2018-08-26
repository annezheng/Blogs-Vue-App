import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ShowBlogs from './views/ShowBlogs.vue'
import AddBlog from './views/AddBlog.vue'
import SingleBlog from './views/SingleBlog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blogs',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
      path: '/blogs/:id',
      name: 'SingleBlog',
      component: SingleBlog
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
