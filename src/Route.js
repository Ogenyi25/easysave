import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";

import Login from "./screens/Login";
import Home from "./screens/Home";


class AppRouter extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route path="/login"  component={Login} />
                        <Route path="/" component={Home}  />
                    </Switch>
            </Router>
        );
    }
}

export default AppRouter;