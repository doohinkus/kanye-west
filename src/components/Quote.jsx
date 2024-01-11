import axios from "axios";
import { useState } from "react";
import "./Quote.css";
import Animate from "./Animate";
import KanyeFace from "./KanyeFace";

const endpoint = "https://api.kanye.rest?format=text";

export function Quote() {
  const [quote, setQuote] = useState("Deviate.");
  async function handleQuoteClicked() {
    const data = await axios.get(endpoint);
    const {
      data: { quote },
    } = await data;
    setQuote(quote);
  }
  return (
    <>
      <Animate>
        <KanyeFace />
      </Animate>
      <h1>Kanye Says</h1>

      <Animate>
        <span data-testid="quote">&ldquo;{quote}&rdquo;</span>
      </Animate>
      <button
        data-testid="getQuote"
        className="button"
        onClick={handleQuoteClicked}
      >
        Get Quote
      </button>
    </>
  );
}
