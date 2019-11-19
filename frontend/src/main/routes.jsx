import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import BillingCycle from '../billingCycle/billingCycle'
import Dashboard from '../dashboard/dashboard'
import App from './app'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)