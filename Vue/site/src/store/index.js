import { createStore } from 'vuex'
import state from './state.js'
import actions from './actions.js'

export default createStore({
  state,
  actions
})