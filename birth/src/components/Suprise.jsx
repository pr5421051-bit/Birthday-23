import { useNavigate } from "react-router-dom";

export default function Surprise() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>For My Beautiful Flower 🌸</h1>

      <p>
        You know why I love flowers so much?  
        Because they remind me of you.  
        Soft, beautiful, full of colors, and able to make anyone smile just by being there ❤️

        <br /><br />

        You love flowers, and I love you — so I guess that means I also love flowers 😌  
        You are the most beautiful creation in my world, and every flower feels a little
        special because it reminds me of you.

        <br /><br />

        And haan, thoda sa funny bhi ho jaaye 😏  
        You are not a fool… you are smart enough to make momos with aata 😉  
        My cute little fool, who makes my life more colorful every day 💖
      </p>

      <div className="flower-gallery">
        <img src="/flower1 (1).jpg" />
        <img src="/flower1 (2).jpg" />
        <img src="/flower1 (3).jpg" />
        <img src="/flower1 (4).jpg" />
        <img src="/flower1 (5).jpg" />
      </div>

      <button className="main-btn" onClick={() => navigate("/final")}>
        One Last Message 💕
      </button>
    </div>
  );
}
