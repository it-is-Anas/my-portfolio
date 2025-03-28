import { createStore } from 'vuex';
import EnglishModul from './Modules/English';
import ArabicModul from './Modules/Arabic';
import GlubalModul from './Modules/Glubal';
import EmailModul from './Modules/Email/index';
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
    arabicStore: ArabicModul,
    glubalStore: GlubalModul,
    emailStore: EmailModul,
  }
})
