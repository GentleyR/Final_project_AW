import { createRouter, createWebHistory } from 'vue-router';
import MovieDetails from './components/MovieDetails.vue';
import UserRegistration from './components/UserRegistration.vue';
import UserLogin from './components/UserLogin.vue';

const routes = [
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/register',
    name: 'UserRegistration',
    component: UserRegistration
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
