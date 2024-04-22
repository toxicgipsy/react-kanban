import "../App.css";
import { useEffect, useState } from "react";
import { cardList } from "../lib/data";
import PopNewCard from "../components/PopUps/PopNewCard";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../components/Global/Global.styled";

const MainPage = () => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <PopNewCard />
        <Header setCards={setCards} cards={cards} />
        {isLoading ? (
          <span>Данные загружаются</span>
        ) : (
          <Main setCards={setCards} cards={cards} />
        )}
      </div>
      <Outlet />
      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
