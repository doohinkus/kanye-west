/* eslint-disable react/prop-types */
import "./Audio.css";
export default function Audio({ src }) {
  if (!src) {
    return null;
  }
  return (
    <audio controls src={`data:audio/mpeg;base64,${src}`} autoPlay={true}>
      Your browser does not support the audio element.
    </audio>
  );
}
