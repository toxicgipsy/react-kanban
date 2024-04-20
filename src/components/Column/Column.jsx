import Card from "../Card/Card";
import { ColumnTitle, MainColumn, Title } from "./Column.styled";

function Column({ title, cards }) {
  return (
    <>
      <MainColumn>
        <ColumnTitle>
          <Title>{title}</Title>
        </ColumnTitle>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </MainColumn>
    </>
  );
}

export default Column;
