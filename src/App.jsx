import { useEffect, useState } from "react";
import "./App.css";
import { getCards } from "./lib/get-cards";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCards(
          "https://670023414da5bd2375534f66.mockapi.io/api/v1/cars"
        );
        setCards(response);
      } catch (error) {
        console.log("Error al solicitar las tarjetas");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className="principal">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}

export default App;
