import { statusList } from "../../lib/data";
import Column from "../Column/Column";
import { Container } from "../Common.js/common.styles";
import * as S from "./Main.styled";

function Main({ cards }) {
  return (
    <>
      <S.Main>
        <Container>
          <S.MainBlock>
            <S.MainContent>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cards.filter((card) => card.status === status)}
                />
              ))}
            </S.MainContent>
          </S.MainBlock>
        </Container>
      </S.Main>
    </>
  );
}

export default Main;
