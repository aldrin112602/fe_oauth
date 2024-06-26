import Login from "./pages/Login/Login";
import Navbar from "./components/NavBar";
import NoPage from "./pages/NoPage/NoPage";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

const App = () => {
  


  // check Auth user
  const checkAuthUser = (): string | undefined | null => {
    return Cookies.get("userToken");
  };

  return (
    <>
      <Router>
        <Navbar isAuth={checkAuthUser} />
        <Routes>
          {!checkAuthUser() && (
            <>
              <Route path="/" element={<Login pageTitle="Sign In" />} />
            </>
          )}

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
