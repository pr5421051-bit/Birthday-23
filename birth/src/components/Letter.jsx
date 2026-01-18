import { useNavigate } from "react-router-dom";

export default function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-page">
      <div className="letter-card">
        <h2 className="letter-title">
          To,<br />The Birthday Girl 🎂💖
        </h2>

        <p>
          Heyyy ❤️  
          First of all, <strong>Happiest Birthday to you</strong> 🥰  
          I hope this will be the happiest birthday of your life.
        </p>

        <p>
          Thank you so much for coming into this world 🌍  
          You are the most beautiful, the most elegant —  
          <em>koi swapn suhani, koi roop swara, koi sabse hasi, koi sabse jawan</em> ✨
        </p>

        <p>
          On your birthday, the first thing I did was send you a simple
          “Happy Birthday” message. Honestly, at that time I didn’t know
          how to make efforts, kya karna chahiye, kaise special feel karwana
          chahiye. Bas ladko wali feeling thi — “happy birthday bhai” type 😅
        </p>

        <p>
          But after that day, I learned. I learned what effort means.
          I learned where and how to show love.  
          And I promise you — every birthday after that,
          every special day of your life, I will try my best to make it
          beautiful 💝
        </p>

        <p>
          Thank you for always supporting me and believing in me.
          That belief changed me and changed my life ❤️  
          I never thought I could put in so much effort,
          but every passing day teaches me to do more —
          because <strong>you deserve everything</strong>.
        </p>

        <p>
          Thank you so much for being born, my love 💕  
          Once again, <strong>Happiest Birthday</strong> to you 🎉🎂
        </p>

        <p className="letter-sign">
          Love you forever 💖<br />
          Yours always
        </p>

        {/* 🌸 NEXT BUTTON */}
        <div className="letter-button-wrapper">
          <button
            className="next-button"
            onClick={() => navigate("/surprise")}
          >
            Let’s Go to the Next Surprise 💝 →
          </button>
        </div>
      </div>
    </div>
  );
}
