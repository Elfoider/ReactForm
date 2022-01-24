import React from 'react';
import { Switch, Route } from "react-router-dom";



//Pages
import Home from "../pages/Home"

export default function Routes() {
    return (
 <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/page1" exact>
        <h2>Page1...</h2>
      </Route>
      <Route path="/page2" exact>
        <h2>Page2...</h2>
      </Route>
    </Switch>
    )
}
