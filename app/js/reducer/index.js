import actions from '../actions/_action-list'

const initialStates = {
  goals: [],
  user: {},
  loader: false,
  allUsers: [],
  reviewee: undefined,
  mentee: undefined,
}

export default (state = initialStates, action) => {
  switch (action.type) {
    case actions.LOADER:
      return Object.assign({}, state, { loader: action.loader })
    case actions.USER:
      return Object.assign({}, state, { user: action.user })
    case actions.GOALS:
      return Object.assign({}, state, { goals: action.goals })
    case actions.ALL_USERS:
      return Object.assign({}, state, { allUsers: action.allUsers })
    case actions.REVIEWEE:
      return Object.assign({}, state, { reviewee: action.reviewee })
    case actions.MENTEE:
      return Object.assign({}, state, { mentee: action.mentee })
    default:
      return state
  }
}
