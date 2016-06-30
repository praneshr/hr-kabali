import $ from 'jquery'
import actions from './_action-list'

export function jobs(jobs) {
  return { type: actions.JOBS, jobs }
}

export function loader(loader) {
  return { type: actions.LOADER, loader}
}

export function user(user) {
  return { type: actions.USER, user}
}

export function error(error) {
  return {type: actions.ERROR, error}
}

export function getJobs() {
  return (dispatch) => {
    $.get('/jobs')
    .done((data) => {
      dispatch(jobs(data))
    })
    .fail((e) => {
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
