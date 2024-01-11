import "./Animate.css";

export default function Animate({ toggle = false, rotate = false, children }) {
  const animationType = rotate ? "spring" : "springNoRotate";
  const animation = (toggle && animationType) || "compressed";
  return <div>{children}</div>;
  // return <div className={`${animation}`}>{children}</div>;
}
