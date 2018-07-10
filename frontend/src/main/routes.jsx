import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard2 from '../dashboard2/dashboard2'
import Dashboard from '../dashboard/dashboard'
import billingCycle from '../billingCycle/billingCycle'

export default props => (
   <Router history={hashHistory}>
      <Route path="/" component={Dashboard} />
      <Route path="dashboard2" component={Dashboard2} />
      <Route path="billingCycles" component={billingCycle} />
      <Redirect from="*" to="/" />
   </Router>
)
