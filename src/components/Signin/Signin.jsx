import { paths } from "../../lib/path";
import { GlobalStyle } from "../Global/Global.styled";
import { Link } from "react-router-dom";
import * as S from "./Signin.styled";
import { useState } from "react";
import { loginUser } from "../../lib/api";

const Signin = ({ login }) => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userExists, setUserExists] = useState(false);

  const authUser = (event) => {
    event.preventDefault();
    loginUser({ login: loginInput, password: passwordInput })
      .then((response) => {
        console.log(response);
        //Переход на главную
        login(response.user);
      })
      .catch((error) => {
        setUserExists(true);
        console.log(error.message);
      });
  };

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
                  onChange={(event) => setLoginInput(event.target.value)}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
                <S.ModalBtnEnter onClick={authUser} id="btnEnter">
                  Войти
                </S.ModalBtnEnter>
                <S.ModalFormGrop>
                  {userExists ? (
                    <p style={{ color: "red" }}>
                      Не правильно ввел логин и пароль
                    </p>
                  ) : null}
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
