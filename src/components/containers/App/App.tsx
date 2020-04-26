import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage, LANDING_PAGE_PATHNAME } from 'components/containers/LandingPage/LandingPage';
import { ContributePage, CONTRIBUTE_PAGE_PATHNAME } from 'components/containers/ContributePage/ContributePage';

import './App.css';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={CONTRIBUTE_PAGE_PATHNAME} component={ContributePage}/>
        <Route exact path={LANDING_PAGE_PATHNAME} component={LandingPage}/>
        <Route path="/*" component={LandingPage}/>
      </Switch>
    </Router>
  );
}
