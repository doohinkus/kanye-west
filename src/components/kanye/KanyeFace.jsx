import "./Kanye.css";
import kanyeImage from "../../images/kanye-west.png";

export default function KanyeFace({ _class }) {
  return <img src={kanyeImage} className={`kanye ${_class || "kanye-rest"}`} />;
}
