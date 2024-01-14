import axios from "axios";
import { useState } from "react";
import "./Quote.css";
import KanyeFace from "../kanye/KanyeFace";
import Bounce from "../bounce/Bounce";
import Wiggle from "../wiggle/Wiggle";
import { delay } from "../../util";

const endpoint = "https://api.kanye.rest?format=text";

export function Quote() {
  const [quote, setQuote] = useState("Deviate.");
  const [animationRequested, setAnimationRequested] = useState(false);
  function handleQuote(quote) {
    setQuote(quote);
    setAnimationRequested(true);
    delay({ callback: () => setAnimationRequested(false), ms: 1000 });
  }
  async function handleQuoteClicked() {
    try {
      const data = await axios.get(endpoint);
      const {
        data: { quote },
      } = await data;
      handleQuote(quote);
    } catch (error) {
      handleQuote(
        "They're trying to silence me. My API is down. But my Spirit is up!"
      );
    }
  }
  return (
    <>
      <Wiggle animationRequested={animationRequested}>
        <KanyeFace />
      </Wiggle>
      <h1>Kanye Says</h1>
      <Bounce animationRequested={animationRequested}>
        <span data-testid="quote">&ldquo;{quote}&rdquo;</span>
      </Bounce>

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
