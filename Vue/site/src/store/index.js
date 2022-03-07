import { createStore } from 'vuex'
import state from './state.js'
import actions from './action.js'

export default createStore({
  state,
  actions
})