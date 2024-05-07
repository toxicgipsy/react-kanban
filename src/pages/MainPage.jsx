import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopNewCard from "../components/PopUps/PopNewCard";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { getTasks } from "../lib/api";
import "../App.css";

const MainPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorTasks, setErrorTasks] = useState(null);

  useEffect(() => {
    getTasks(user.token)
      .then((data) => {
        setCards(data.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorTasks(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopNewCard />
        <Header setCards={setCards} cards={cards} />
        {isLoading ? (
          <span>Данные загружаются</span>
        ) : (
          <Main setCards={setCards} cards={cards} errorTasks={errorTasks} />
        )}
        <br />
        {errorTasks && <span style={{ color: "red" }}>Случилась ошибка</span>}
      </Wrapper>
      <Outlet />
      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
