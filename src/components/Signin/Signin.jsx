import { paths } from "../../lib/path";
import { GlobalStyle } from "../Global/Global.styled";
import { Link } from "react-router-dom";
import * as S from "./Signin.styled";

const Signin = () => {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerSignin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Вход</h2>
              </S.ModalTitle>
              <S.ModalFormLogin>
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter">
                  <Link to={paths.MAIN}>Войти</Link>
                </S.ModalBtnEnter>
                <S.ModalFormGrop>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={paths.REGISTER}>Зарегистрируйися здесь</Link>
                </S.ModalFormGrop>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignin>
      </S.Wrapper>
    </>
  );
};

export default Signin;
