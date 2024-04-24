import { Link } from "react-router-dom";
import * as S from "./PopExit.styled";

const PopExit = ({ logout }) => {
  /* pop-up start*/
  return (
    <S.PopExitx>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit">
            <S.PopExitYes onClick={logout} id="exitYes">
              Да, выйти
            </S.PopExitYes>
            <S.PopExitNo id="exitNo">
              <Link to={"/"}>Нет, остаться</Link>
            </S.PopExitNo>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExitx>
  );
};

export default PopExit;
