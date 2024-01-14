/* eslint-disable react/prop-types */
import "./Wiggle.css";

export default function Wiggle({ animationRequested, children }) {
  return <div className={animationRequested ? "wiggle" : ""}>{children}</div>;
}
