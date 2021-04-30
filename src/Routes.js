import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact={true}
          path="/" // always loads first
          component={HomePage}
          render={(e, props) => <HomePage {...e} data={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
