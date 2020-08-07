import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App.css'
import Principal from './components/Principal';


export default function BasicExample() {

  return (

    <Router>
      <nav>
        <ul>
        <h1>LISHOES SRL</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/dashboard">Contacto</Link>
          </li>
        </ul>
  </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
    </Router>

  );
}

function Home() {
  return (
    <div className="home">

      < Principal />

    </div>

  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
dasdasdasas
asdasdasda
dasdsadasdas
dasdasdadaa
dsaasdddddddddddddd
asddddddddddddddd
asdassss

      </p>
      <footer>
      sadasdasdasdasdas
      </footer>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
dasdasdasas
asdasdasda
dasdsadasdas
dasdasdadaa
dsaasdddddddddddddd
asddddddddddddddd
asdassss

      </p>
      <footer>
      sadasdasdasdasdas
      </footer>
    </div>
  );
}
