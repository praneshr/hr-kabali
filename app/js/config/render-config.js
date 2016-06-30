import dashboard from '../pages/dashboard'
import goals from '../pages/goals'
import createGoal from '../pages/create-goal'

const renderConfig = {
  dashboard: {
    component: dashboard,
  },
  goals: {
    component: goals,
  },
  goalCreate: {
    component: createGoal,
  }
}

export default renderConfig
