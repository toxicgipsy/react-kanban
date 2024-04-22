import { Link } from "react-router-dom";
import { paths } from "../lib/path";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ничего не найдено ^_^ </h1>
      <Link to={paths.MAIN}>Перейти на главную</Link>
    </div>
  );
};

export default NotFoundPage;
