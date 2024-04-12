import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { APP_ROUTES } from "./approutes";
import Dashboard from "../Components/Pages/Dashboard";
import SuccessMsg from "../Components/Authentication/SuccessMsg";
import ForgotPassword from "../Components/Authentication/ForgotPassword";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import OTP from "../Components/Authentication/OTP";
import Product from "../Components/Pages/Products";
import Home from "../Components/Pages/Home";
import ProductDetails from "../Components/Pages/Products/ProductDetails";

const PageRouting = () => {
  return (
    <Router>
      <Switch>
      <Route exact path={APP_ROUTES.HOME} component={Home} />
        <Route path={APP_ROUTES.LOGINFORM} component={Login} />
        <Route path={APP_ROUTES.SIGNUPFORM} component={Signup} />
        <Route path={APP_ROUTES.SUCCESSMSG} component={SuccessMsg} />
        <Route path={APP_ROUTES.FORGOTFORM} component={ForgotPassword} />
        <Route path={APP_ROUTES.OTP} component={OTP} />
        <Route path={APP_ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={APP_ROUTES.PRODUCTS} component={Product} />
        <Route path={APP_ROUTES.PRODUCTDETAILS} component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export { PageRouting };
