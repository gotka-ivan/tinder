import Vue from 'vue';
import Vuex from 'vuex';
import { getCards } from '@src/controllers/cards';

Vue.use(Vuex);
export default {
  namespaced: true,
  state: () => ({
    /**
     * Номер чанка, который нужно подтянуть с сервера
     */
    chunkIndex: 0,

    /**
     * Флаг что на сервере ещё есть данные и можно их получить
     */
    isGetCards: true,

    /**
     * Массив всех карточек
     */
    list: [],

    /**
     * Индекс текущей карточки
     */
    currentIndex: 0
  }),
  mutations: {
    setList(state, list) {
      state.list = state.list.concat(list);
    },
    setIsGetCards(state, isGetCards) {
      state.isGetCards = isGetCards;
    },
    setChunkIndex(state, chunkIndex) {
      state.chunkIndex = chunkIndex;
    },
    setCurrentIndex(state, currentIndex) {
      state.currentIndex = currentIndex;
    }
  },
  actions: {
    async getCards({ commit, state }) {
      /**
       * Обращение в контроллер за получением карточек с сервера
       */
      await getCards(state.chunkIndex)
        .then(cards => {
          commit('setChunkIndex', state.chunkIndex + 1);
          commit('setList', cards);
        })
        .catch(() => {
          commit('setIsGetCards', false);
        });
    }
  }
};
