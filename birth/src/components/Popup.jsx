import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Popup() {
  const [show, setShow] = useState(true);
const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="popup-bg">
      <div className="popup-card">
        <h2>💖 Hey My Love 💖</h2>
        <p>
          This little world was created only for you.  
          I hope it makes you smile the way you make me smile every day.
        </p>

       <button
  onClick={() => {
    setShow(false);
    navigate("/home");
  }}
>
  Enter ❤️
</button>

      </div>
    </div>
  );
}
