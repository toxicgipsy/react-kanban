import { Routes, Route } from "react-router-dom";
import { paths } from "./lib/path";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./components/Routes/PrivateRouters";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage />} />
      <Route path={paths.REGISTER} element={<RegistrationPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouters;
