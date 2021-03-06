import React from "react";
// Pages
import Home from "./Pages/Home";
import AboutHoney from "./Pages/AboutHoney";
import Bees from "./Pages/Bees";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import Error from "./Pages/Error";
// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

// Router Dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/about-honey" exact>
                    <AboutHoney />
                </Route>
                <Route path="/bees" exact>
                    <Bees />
                </Route>
                <Route path="/recipes" exact>
                    <Recipes />
                </Route>
                <Route
                    path="/recipes/:id"
                    children={<SingleRecipe />}
                    exact
                ></Route>
                <Route exact path="/honey">
                    <Redirect to="/" />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
