import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RubyCaseStudyView from '../views/RubyCaseStudyView.vue'
import ContactView from '../views/ContactView.vue'
import DesignView from '../views/DesignView.vue'
import PhotosView from '../views/PhotosView.vue'
import PortraitsView from '../views/PortraitsView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import UploadPhotoView from '../views/UploadPhotoView.vue'
import AuntyJensCaseStudyView from '../views/AuntyJensCaseStudyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auntyjens-case-study',
    name: 'Aunty Jens',
    component: AuntyJensCaseStudyView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blueruby-case-study',
    name: 'case study',
    component: RubyCaseStudyView
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
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/upload-photo',
    name: 'upload',
    component: UploadPhotoView
  },
]

const router = new VueRouter({
  routes
})

export default router
