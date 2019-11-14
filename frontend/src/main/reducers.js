import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCylcleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billyngCycle: BillingCylcleReducer,
    form: formReducer
})

export default rootReducer

