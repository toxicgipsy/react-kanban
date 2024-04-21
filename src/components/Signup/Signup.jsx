import { Link } from "react-router-dom";
import { paths } from "../../lib/path";
import * as S from "./Signup.styled";

const Signup = () => {
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
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignUpEnt id="SignUpEnter">
                  <a href="../main.html">Зарегистрироваться</a>{" "}
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
