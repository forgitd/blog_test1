import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

// const a = moduleA
export default new Vuex.Store({
  state: {
    Blogs: [
      {id: Number, title: String, comment: String, date: Date, md_url: String}
    ],
    blog_id: Number,
    flag: false,
    common_flag: false,
    reviews: [
      {id_review: Number, id_blog: Number, comment: String, date: Date, id_user_name: String}
    ]
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
