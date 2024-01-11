import axios from "axios";
import { useState } from "react";
import "./Quote.css";
import KanyeFace from "../kanye/KanyeFace";

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
      <KanyeFace />
      <h1>Kanye Says</h1>

      <span data-testid="quote">&ldquo;{quote}&rdquo;</span>
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
