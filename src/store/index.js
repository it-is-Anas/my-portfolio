import { createStore } from 'vuex'
import EnglishModul from './Modules/English'
import ArabicModul from './Modules/Arabic'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    englishStore: EnglishModul,
    arabicStore: ArabicModul
  }
})
