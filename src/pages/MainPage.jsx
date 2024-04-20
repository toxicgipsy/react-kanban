import { useEffect, useState } from "react";

import { cardList } from "../lib/data";
import MainBlock from "../components/Main/Main";

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
      <MainBlock setCards={setCards} cards={cards} />
      {isLoading && <span>Данные загружаются</span>}
      {!isLoading && (
        <div className="wrapper">
          <PopExit />
          <PopNewCard />
          <PopBrowse />
          <Header setCards={setCards} cards={cards} />
          <Main cards={cards} />
          <div></div>
        </div>
      )}
      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
