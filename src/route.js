import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Wizard2 from './Component/Wizard/Wizard2';
import Wizard3 from './Component/Wizard/Wizard3';


export default (
    <Switch>
        <Route component={ Dashboard } exact path="/" />
        <Route component={ Wizard } exact path="/wizard/step1" />
        <Route component={Wizard2 } exact path="/wizard/step2" />
        <Route component={Wizard3 } exact path="/wizard/step3" />
    </Switch>
)