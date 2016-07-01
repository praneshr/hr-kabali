import $ from 'jquery'
import actions from './_action-list'
import page from 'page'

export function goals(goals) {
  return { type: actions.GOALS, goals }
}

export function loader(loader) {
  return { type: actions.LOADER, loader}
}

export function user(user) {
  return { type: actions.USER, user}
}

export function error(error) {
  return { type: actions.ERROR, error }
}

export function allUsers(allUsers) {
  return { type: actions.ALL_USERS, allUsers }
}

export function reviewee(reviewee) {
  return {type: actions.REVIEWEE, reviewee}
}

export function mentee(mentee) {
  return {type: actions.MENTEE, mentee}
}

export function getGoals(email) {
  return (dispatch) => {
    dispatch(loader(true))
    $.get('/goals', {email})
    .done((data) => {
      dispatch(loader(false))
      dispatch(goals(data))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch(loader(true))
    $.get('/user')
    .done((data) => {
      dispatch(loader(false))
      dispatch(user(data))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}

export function getAllUsers() {
  return (dispatch) => {
    dispatch(loader(true))
    $.get('/user/all')
    .done((data) => {
      dispatch(allUsers(data))
      dispatch(loader(false))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}

export function submitGoal(goal) {
  return (dispatch) => {
    dispatch(loader(true))
    $.post('/goals', { goal })
    .done((data) => {
      page('/goals')
      page()
      dispatch(loader(false))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}

export function getReviewee(goal) {
  return (dispatch) => {
    dispatch(loader(true))
    $.get('/reviewee')
    .done((data) => {
      dispatch(reviewee(data))
      dispatch(loader(false))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}

export function getMentee(goal) {
  return (dispatch) => {
    dispatch(loader(true))
    $.get('/mentee')
    .done((data) => {
      dispatch(mentee(data))
      dispatch(loader(false))
    })
    .fail((e) => {
      dispatch(loader(false))
      dispatch(error(e))
    })
  }
}
