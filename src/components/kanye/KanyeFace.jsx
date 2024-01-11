import "./Kanye.css";
import kanyeImage from "../../images/kanye-west.png";

export default function KanyeFace({ _class }) {
  return (
    <div className={`${_class ? "kanye-wiggle" : ""}`}>
      <img src={kanyeImage} className={`kanye`} />
    </div>
  );
}
