import { Routes, Route, useNavigate } from "react-router-dom";
import { paths } from "./lib/path";
import PrivateRoutes from "./components/Routes/PrivateRouters";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";

const AppRouters = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
  };
  const logout = () => {
    setIsAuth(false);
    navigate(paths.LOGIN);
  };

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuth={isAuth} />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage login={login} />} />
      <Route
        path={paths.REGISTER}
        element={<RegistrationPage login={login} />}
      />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouters;
