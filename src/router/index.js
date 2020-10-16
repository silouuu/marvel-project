import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Characters from '../views/Characters.vue';
import Character from '../views/Character.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
