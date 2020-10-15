import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Characters from '../views/Characters.vue';
import Character from '../views/Character.vue';

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
  // {
  //   path: '/search',
  //   component: SearchUser,
  //   props: (route) => ({ query: route.query.q })
  // }
  // L'URL /search?q=vue passerait {query: 'vue'} comme props au composant SearchUser
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
