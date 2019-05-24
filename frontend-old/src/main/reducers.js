import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as ToastrReducer} from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: ToastrReducer,
    auth: AuthReducer
})

export default rootReducer