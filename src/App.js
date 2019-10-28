import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import DashboardComponent from "./Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div id='routing-container'>
        <Route path='/Login' component={Login}></Route>
        <Route path='/SignUp' component={SignUp}></Route>
        <Route path='/Dashboard' component={DashboardComponent}></Route>
      </div>
    </Router>
  );
}

export default App;
