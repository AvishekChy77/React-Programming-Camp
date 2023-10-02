import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleAddToCart }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className=" md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-3">
      {cards.map((card, idx) => (
        <Card key={idx} handleAddToCart={handleAddToCart} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
