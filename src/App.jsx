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
        console.log("Cards obtenidas :D",cards);
      } catch (error) {
        console.log("Error al solicitar las tarjetas");
      }
    }
    fetchData();
  }, []);
  return (
  <>
    <Card card={cards[0]}/>
  </>
  );
}

export default App;
