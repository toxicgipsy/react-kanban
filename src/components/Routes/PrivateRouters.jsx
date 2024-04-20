import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../../lib/path";

const PrivateRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

export default PrivateRoutes;
