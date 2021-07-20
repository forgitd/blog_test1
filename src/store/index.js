import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

const a = moduleA
export default new Vuex.Store({
  state: {
    Blogs: [
      {id: Number, title: String, comment: String, date: Date, md_url: String}
    ],
    blog_id: Number,
    flag: false,
    common_flag: false
  },
  mutations,
  actions,
  getters,
  modules: {
    a
  }
})
