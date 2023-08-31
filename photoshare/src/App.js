import React from "react";
import Users from "./users/pages/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewLocations from "./locations/pages/NewLocations";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./common/components/Navigation/MainNavigation";
import UserLocations from "./locations/pages/UserLocations";
const App = () => {
  return <Router><MainNavigation />
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userid/locations">
        <UserLocations />
      </Route>
      <Route path="/locations/new" exact>
        <NewLocations />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>;
}
export default App;