import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    user:{},
    deletemodel:false,
    updatemodel:false,
    insertmodel:false,
    modeldata:{},
    deleteobj:{}
  },
  mutations:{
    set_modeluserName:(state,userName)=>{
      state.modeldata.userName=userName
    },
    set_modeluserphone:(state,phone)=>{
      state.modeldata.phone=phone
    },
    set_modeluserRole:(state,userRole)=>{
      state.modeldata.userRole=userRole
    },
    set_modeluserCode:(state,userCode)=>{
      state.modeldata.userCode=userCode
    },
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
