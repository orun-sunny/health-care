import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Services from "./components/Services/Services.js";
import Contact from "./components/Contact/Contact.js";
import NotFound from "./components/NotFound/NotFound.js";
import Login from "./components/login/Login.js";
import SignUp from "./components/signup/Signup.js";
import AuthProvider from "./contexts/AuthProvider.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute.js";
import Cart from "./components/cart/Cart.js";
import ServiceDetails from "./components/serviceDetails/ServiceDetails.js";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>

            <Route path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
