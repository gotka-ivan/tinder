import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@src/views/Main.vue';
import store from '@src/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    /**
     * Получаем карточки с сервера
     */
    beforeEnter: (to, from, next) => {
      if (!store.state.cards.list.length) store.dispatch('cards/getCards');
      next();
    },
    component: Main
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
