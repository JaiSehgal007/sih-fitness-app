import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";

import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";

import Main from "./Main";
import DeveloperCard from "./components/DeveloperCard";
import Combat from "./Combat";
import { Profile } from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import UpdateProfile from "./components/UpdateProfile";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoutes";
import TrainGround from "./components/TrainGround";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <Routes>
    {/* <AuthProvider> */}
            {/* <Route element={ <PrivateRoute/> }> */}
            <Route exact path="/combat" element={<Combat />} />
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/update-profile" element={<UpdateProfile />} />
                <Route exact path="/training-ground" element={<TrainGround />} />
            {/* </Route> */}

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/train/:exercise" element={<TrainGround />} />

    </Routes>
  );
}
export default App;