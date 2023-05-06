import { CHANGE_ENVIRONMENT, CHANGE_PROJECT } from '@/store/actions.type'
import { SET_ENVIRONMENT, SET_PROJECT } from '@/store/mutation.types'

const state = {
  project: '',
  environment: '',
}

const getters = {
  project(state) {
    return state.project
  },
  environment(state) {
    return state.environment
  },
}

const actions = {
  [CHANGE_PROJECT](context, val) {
    context.commit(SET_PROJECT, val)
  },
  [CHANGE_ENVIRONMENT](context, val) {
    context.commit(SET_ENVIRONMENT, val)
  },
}

const mutations = {
  [SET_PROJECT](state, val) {
    state.project = val
  },
  [SET_ENVIRONMENT](state, val) {
    state.environment = val
  },
}

const topProject = {
  state,
  getters,
  actions,
  mutations,
}

export default topProject
