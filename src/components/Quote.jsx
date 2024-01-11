import { useFetch } from "../hooks/useFetch";
import "./Quote.css";
import Animate from "./Animate";
import KanyeFace from "./KanyeFace";

export function Quote() {
  const [quote, toggle, setToggle] = useFetch();

  return (
    <>
      <Animate toggle={toggle} rotate={true}>
        <KanyeFace />
      </Animate>
      <h1>Kanye Says</h1>

      <Animate toggle={toggle} rotate={false}>
        <span data-testid="quote">&ldquo;{quote}&rdquo;</span>
      </Animate>
      <button
        data-testid="getQuote"
        className="button"
        onMouseDown={() => setToggle(false)}
        onMouseUp={() => setToggle(true)}
      >
        Get Quote
      </button>
    </>
  );
}
