import { createStore } from "vuex";
import getters from "@/modules/getters.js"
import state from "@/modules/state.js"

export default createStore({
  modules: { 
    getters, state
  },
  state: state,
  getters: getters,
  actions: {},
});
