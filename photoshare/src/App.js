import React from "react";
import Users from "./users/pages/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return <Router>
    <Route path="/">
      <Users />
    </Route>

  </Router>;
  // (
  //   <div>
  //     <users/>
  //     <h1>React starts here</h1>
  //   </div>
  //   );
};



export default App;