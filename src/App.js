import "normalize.css";
import "./App.scss";
import "./styles/main.scss";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Account from "./pages/Account";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export default function App() {
    return (
        <Router history={history}>
            <div>
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
            </div>
        </Router>
    );
}
