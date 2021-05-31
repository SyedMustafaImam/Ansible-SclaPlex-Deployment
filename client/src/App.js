// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserForm from './Components/UserForm'
import LoginForm from './Components/LoginForm'
import Navbars from './Components/Navbars'
import Home from './Components/home'
import Error from './Components/error'
import About from './Components/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from'./Components/admin'
import NewsEvent from './Components/newsEvent';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

// import { createBrowserHistory } from "history";

function App() {
  return (
    <Router>
      <div class="myBody">
        <Navbars />
        

        <Switch>

          <Route exact path="/LoginForm">
            <LoginForm />
          </Route>

          <Route path="/UserForm">
            <UserForm />
          </Route>
          <Route path="/Aboutus">
            <About />
          </Route>

          <Route path="/NewsEvents">
            <NewsEvent />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/" >
            <Home />
          </Route>

         

          <Route>
            <Error />
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
