import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "@pages/Home/Home";
import SupportPage from "@pages/Support/Support";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/support" component={SupportPage} />

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
