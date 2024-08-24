import About from "pages/about/about";
import ForgotPassword from "pages/auth/forgot-password";
import Login from "pages/auth/login";
import OtpVerifiaction from "pages/auth/otp-verifiaction";

import SignUp from "pages/auth/sign-up";
import Contact from "pages/contact/contact";

import Home from "pages/home/home";
import PopularNews from "pages/popular-news/popular-news";
import NewsDetails from "pages/news-details/news-details";
import { RouteObject } from "react-router";
import ResetPassword from "pages/auth/reset-password";
import MyProfile from "pages/my-profile/my-profile";
import SavedNews from "pages/saved-news/saved-news";
import Subscription from "pages/subscription/subscription";
import Payment from "pages/payment/payment";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news-details",
    element: <NewsDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/popular-news",
    element: <PopularNews />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "/auth/otp-verification",
    element: <OtpVerifiaction />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset-password/:id",
    element: <ResetPassword />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "saved-news",
    element: <SavedNews />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },


];

export default routes;
