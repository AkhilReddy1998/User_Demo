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
import Cart from "../Components/Pages/Cart";
import CartCheckout from "../Components/Pages/Cart/CartCheckout";
import OrderConfirmation from "../Components/Pages/Cart/CartCheckout/OrderConfirmation";
import MyAccount from "../Components/Pages/MyAccount";
import MyAddress from "../Components/Pages/MyAccount/MyAddress";
import MyPersonalDetails from "../Components/Pages/MyAccount/MyPersonalDetails";
import OrderHistory from "../Components/Pages/MyAccount/OrderHistory";
import Wishlist from "../Components/Pages/Wishlist";
import BestSeller from "../Components/Pages/ExtraPage/BestSeller";

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
        <Route path={APP_ROUTES.CART} component={Cart} />
        <Route path={APP_ROUTES.CARTCHECKOUT} component={CartCheckout} />
        <Route path={APP_ROUTES.ORDERCONFIRMATION} component={OrderConfirmation} />
        <Route path={APP_ROUTES.MYACCOUNT} component={MyAccount} />
        <Route path={APP_ROUTES.MYADDRESS} component={MyAddress} />
        <Route path={APP_ROUTES.MYPERSONALDETAILS} component={MyPersonalDetails} />
        <Route path={APP_ROUTES.ORDERHISTORY} component={OrderHistory} />
        <Route path={APP_ROUTES.WISHLIST} component={Wishlist} />
        <Route path={APP_ROUTES.BESTSELLER} component={BestSeller} />

      </Switch>
    </Router>
  );
};

export { PageRouting };
