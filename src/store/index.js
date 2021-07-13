import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";

Vue.use(Vuex)

const a = moduleA
export default new Vuex.Store({
  state: {
  },
  mutations,
  actions,
  getters,
  modules: {
    a
  }
})
