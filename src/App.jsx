import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './Blog';

import Introduction from './Introduction';
import ResumePage from './resume/ResumePage';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/resume">
              <ResumePage />
          </Route>

          <Route path="">
            <Introduction />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
