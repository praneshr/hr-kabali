import dashboard from '../pages/dashboard'
import goals from '../pages/goals'
import createGoal from '../pages/create-goal'
import reviewee from '../pages/reviewee'
import mentee from '../pages/mentee'

const renderConfig = {
  dashboard: {
    component: dashboard,
  },
  goals: {
    component: goals,
  },
  goalCreate: {
    component: createGoal,
  },
  reviewee: {
    component: reviewee,
  },
  mentee: {
    component: mentee,
  }
}

export default renderConfig
