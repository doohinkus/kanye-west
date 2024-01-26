/* eslint-disable react/prop-types */
import "./Animation.css";
import { animations } from "./constants";

export default function Animation({
  animationRequested,
  animation = animations.bouncy,
  children,
}) {
  return <div className={animationRequested ? animation : ""}>{children}</div>;
}
