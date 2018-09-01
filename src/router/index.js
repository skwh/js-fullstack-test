import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import ContactMe from '../components/ContactMe'
import Portfolio from '../components/Portfolio'
import Project from '../components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/contact-me',
      component: ContactMe
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      component: Project
    }
  ],
  mode: 'history'
})
