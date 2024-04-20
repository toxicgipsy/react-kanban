import { useState } from "react";
import { cardList } from "../../lib/data";
import * as S from "./Header.styled";
import { Container } from "../Common.js/common.styles";

function Header({ cards, setCards }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);
  const addNewCard = () => {
    const newCard = {
      id: cardList.length + 1,
      theme: "Web desigin",
      title: "Новая задача",
      date: "30.04.24",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  return (
    <>
      <S.Header>
        <Container>
          <S.HeaderBlock>
            <S.HeaderLogo>
              <a href="" target="_self">
                <img src="../public/logo.png" alt="logo" />
              </a>
            </S.HeaderLogo>
            {/* <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="public/logo_dark.png" alt="logo" />
              </a>
            </div> */}
            <S.HeaderNav>
              <S.HeaderBtn onClick={addNewCard}>
                <a href="#">Создать новую задачу</a>
              </S.HeaderBtn>
              <S.HeaderUser href="#user-set-target" onClick={toggleDropdown}>
                Ivan Ivanov
              </S.HeaderUser>
              {isOpen && (
                <S.HeaderPopUserSet id="user-set-target">
                  <S.HeaderPopUserSetName>Ivan Ivanov</S.HeaderPopUserSetName>
                  <S.HeaderPopUserSetMail>
                    ivan.ivanov@gmail.com
                  </S.HeaderPopUserSetMail>
                  <S.HeaderPopUserSetTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </S.HeaderPopUserSetTheme>
                  <S.HeaderBtnExit>
                    <a href="#popExit">Выйти</a>
                  </S.HeaderBtnExit>
                </S.HeaderPopUserSet>
              )}
            </S.HeaderNav>
          </S.HeaderBlock>
        </Container>
      </S.Header>
    </>
  );
}

export default Header;
