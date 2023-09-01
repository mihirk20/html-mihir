import React, { useState, useCallback } from "react";
import Users from "./users/pages/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewLocations from "./locations/pages/NewLocations";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./common/components/Navigation/MainNavigation";
import UserLocations from "./locations/pages/UserLocations";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";

const App = () => {
  const [isloggedin, setloggedin] = useState(false);
  const login = useCallback(() => {
    setloggedin(true);
  }, []);
  const logout = useCallback(() => {
    setloggedin(false);
  }, []);
  return (
    <LoginContext.Provider value={{ isloggedin: isloggedin, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
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
            <Route path to="/Login">
              <Login />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </LoginContext.Provider>
  )
}
export default App;