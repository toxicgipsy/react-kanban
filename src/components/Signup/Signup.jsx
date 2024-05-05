import { Link } from "react-router-dom";
import { paths } from "../../lib/path";
import * as S from "./Signup.styled";
import { useState } from "react";
import { registrationUser } from "../../lib/api";

const Signup = ({ login }) => {
  const [nameInput, setNameInput] = useState("");
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const regUser = () => {
    registrationUser({
      name: nameInput,
      login: loginInput,
      password: passwordInput,
    })
      .then((response) => {
        // Переход на главную
        login(response.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <S.Wrapper>
        <S.ContainerSignup>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLoogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                  onChange={(event) => setNameInput(event.target.value)}
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  onChange={(event) => setLoginInput(event.target.value)}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
                <S.ModalBtnSignUpEnt
                  onClick={regUser}
                  id="SignUpEnter"
                  type="button"
                >
                  Зарегистрироваться
                </S.ModalBtnSignUpEnt>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт?{" "}
                    <Link to={paths.LOGIN}>Войдите здесь</Link>
                  </p>
                </S.ModalFormGroup>
              </S.ModalFormLoogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignup>
      </S.Wrapper>
    </>
  );
};

export default Signup;
