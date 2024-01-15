import { useState } from "react";
import "./Quote.css";
import KanyeFace from "../kanye/KanyeFace";
import Bounce from "../bounce/Bounce";
import Wiggle from "../wiggle/Wiggle";
import Audio from "../audio/Audio";
import { delay, kanyeApi, voiceoverGirl } from "../../util";

export function Quote() {
  const [quote, setQuote] = useState("Deviate.");
  const [audio, setAudio] = useState(null);
  const [animationRequested, setAnimationRequested] = useState(false);
  function handleQuote(quote) {
    setQuote(quote);

    voiceoverGirl
      .getVoiceOver({ text: quote, voice: "en_us_001" })
      .then((data) => setAudio(data.data))
      .catch(() => setAudio(null));
    setAnimationRequested(true);
    delay({ callback: () => setAnimationRequested(false), ms: 1000 });
  }
  async function handleQuoteClicked() {
    try {
      const quote = await kanyeApi();
      handleQuote(quote);
    } catch (error) {
      handleQuote("oops");
      console.log(error);
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
      <Audio src={audio} />
    </>
  );
}
