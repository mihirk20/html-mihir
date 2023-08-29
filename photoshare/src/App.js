import React from "react";
import Users from "./users/pages/Users";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import NewLocations from "./locations/pages/NewLocations";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import MainNavigation from "../common/components/Navigation/MainNavigation";
const App = () => {
  return <Router>
    <Switch>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/locations/new" exact>
      <NewLocations />
    </Route>
    <Redirect to="/" />
    </Switch>
  </Router>;
}
export default App;