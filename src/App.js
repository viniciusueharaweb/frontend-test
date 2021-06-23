import "normalize.css";
import "./App.scss";
import "./styles/main.scss";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Account from "./pages/Account";
const Home = lazy(() => import("./pages/Home"));
const Account = lazy(() => import("./pages/Account"));
const Register = lazy(() => import("./pages/Register"));
const history = createBrowserHistory();

export default function App() {
    return (
        <Router history={history}>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/account">
                            <Account />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}
