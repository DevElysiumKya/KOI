import "./CursorPosition.js";
import "./Cursor-style.css";
export default function CursorCustom() {
    return (
      <div id="cursor-wrapper" className="cursor-wrapper">
      <div id="cursor" className="cursor">
        <div className="cvertical"></div><div className="chorizontal"></div><div className="chorizontal"></div><div className="cvertical"></div>
      </div>
      </div>
    );
}