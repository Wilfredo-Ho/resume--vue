import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Basic from '@/components/Basic'
import Work from '@/components/Work'
import Project from '@/components/Project'
import Others from '@/components/Others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/others',
      name: 'Others',
      component: Others
    },
  ]
})
