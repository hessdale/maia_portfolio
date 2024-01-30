import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CaseStudyView from '../views/CaseStudyView.vue'
import ContactView from '../views/ContactView.vue'
import DesignView from '../views/DesignView.vue'
import PhotosView from '../views/PhotosView.vue'
import PortraitsView from '../views/PortraitsView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/case-study',
    name: 'case study',
    component: CaseStudyView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/design',
    name: 'design',
    component: DesignView
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosView
  },
  {
    path: '/portraits',
    name: 'portraits',
    component: PortraitsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
