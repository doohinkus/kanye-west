import { useState, useEffect } from "react";
import "./Quote.css";
import KanyeFace from "../kanye/KanyeFace";
import Bounce from "../bounce/Bounce";
import Wiggle from "../wiggle/Wiggle";
import Audio from "../audio/Audio";
import { voiceoverGirl, kanyeQuote } from "../../apis";

export function Quote() {
  const [quote, setQuote] = useState("Deviate.");
  const [audio, setAudio] = useState(null);
  const [animationRequested, setAnimationRequested] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationRequested) {
        setAnimationRequested(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [quote]);

  async function handleQuoteClicked() {
    if (animationRequested) return;
    try {
      const quote = await kanyeQuote.getKanyeQuote();

      setQuote(quote);
      setAnimationRequested(true);

      const voice = await voiceoverGirl.getVoiceOver({
        text: quote,
        voice: "en_us_001",
      });

      setAudio(voice.data);
    } catch {
      setAudio(null);
      setQuote(
        "They trying to silence me. My API is down, but my Spirit is up!"
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
      <Audio src={audio} />
    </>
  );
}
