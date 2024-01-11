import axios from "axios";
import { useState } from "react";
import "./Quote.css";
import KanyeFace from "../kanye/KanyeFace";

const endpoint = "https://api.kanye.rest?format=text";

function delay({ callback, ms }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), ms);
  });
}

export function Quote() {
  const [quote, setQuote] = useState("Deviate.");
  const [animationRequested, setAnimationRequested] = useState(false);
  async function handleQuoteClicked() {
    const data = await axios.get(endpoint);
    const {
      data: { quote },
    } = await data;
    await setQuote(quote);
    await setAnimationRequested(true);
    await delay({ callback: () => setAnimationRequested(false), ms: 1000 });
  }
  return (
    <>
      <KanyeFace _class={`${animationRequested ? "quote" : ""}`} />
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
