import Vue from 'vue'
import Vuex from 'vuex'
import detailForm from './detail_form'
import layout from './layout';
import user from './user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detailForm,
    layout,
    user
  }
})
