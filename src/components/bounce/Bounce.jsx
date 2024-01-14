/* eslint-disable react/prop-types */
import "./Bounce.css";

export default function Bounce({ animationRequested, children }) {
  return <div className={animationRequested ? "bouncy" : ""}>{children}</div>;
}
