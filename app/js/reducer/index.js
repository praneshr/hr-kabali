import actions from '../actions/_action-list'

const initialStates = {
  jobs: [],
  user: {},
  loader: false,
}

export default (state = initialStates, action) => {
  switch (action.type) {
    case actions.LOADER:
      return Object.assign({}, state, { loader: action.loader })
    case actions.USER:
      return Object.assign({}, state, { user: action.user })
    case actions.JOBS:
      return Object.assign({}, state, { jobs: action.jobs })
    default:
      return state
  }
}
