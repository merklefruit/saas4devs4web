import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "@pages/Home/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
