import { useNavigate } from "react-router-dom";
export default function Story() {
    const navigate=useNavigate();
  return (
    <div className="page">
      <h1>Our Story 💕</h1>
      <p>
  We met in January, and honestly from the very first time we started talking,
  something inside me knew that you were special. Those small conversations slowly
  became my favorite part of the day. I didn’t realize when you became so important
  to me, but one thing was clear — you were already in my heart ❤️

  <br /><br />

  From that very moment, I promised myself that one day I will marry this girl.
  I will be the one who protects her, supports her, and stands beside her no matter
  what life throws at us. Tum sirf meri girlfriend nahi ho, tum meri future ho,
  meri strength ho, aur meri sabse badi khushi ho 💕

  <br /><br />

  I want to be the reason you always feel safe, loved, and confident.
 You know in starting we fight a lot over many thing but one thing i know ki ye sb fixed ho jayega because 
 love is more there and dhere dhere hmne sb cheeze fixed krli aur dekho abhi kitna khush hai na hmm.Pray to gor we have more special day like this
 and always celebrate with each  other before meeting you I have only one birthday that mine and belive me that is the most bad day but after meeting you i have two birthday ohh Sorry I have 3 birthday ( 3rd June is also one of them) Love you soo much
 ❤️

  <br /><br />

  The biggest gift I ever found in my life is you.
  Not money, not success, not anything else — just you.
  And I promise to love you more every single day, till my last breath 💖
</p>
<button className="main-btn" onClick={() => navigate("/letter")}>
        Enter My Letter 💖
      </button>
    </div>
  );
}
