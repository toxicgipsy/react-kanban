import { Link } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitForm,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
} from "./PopExit.styled";
import { paths } from "../../lib/path";

const PopExit = ({ logout }) => {
  /* pop-up start*/
  return (
    <>
      <PopExit id="popExit">
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <PopExitForm id="formExit" action="#">
              <PopExitYes onClick={logout}>
                <Link to={paths.LOGIN}>Да, выйти</Link>
              </PopExitYes>
              <PopExitNo id="exitNo">
                <Link to={"/"}>Нет, остаться</Link>
              </PopExitNo>
            </PopExitForm>
          </PopExitBlock>
        </PopExitContainer>
      </PopExit>
    </>
  );
};

export default PopExit;
