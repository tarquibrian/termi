import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Rutas from "./components/pages/Rutas";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import DeleteAllUsers from "./components/users/DeleteAllUsers"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>          
          <Route exact path="/login" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/delete" component={DeleteAllUsers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/rutas" component={Rutas} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
