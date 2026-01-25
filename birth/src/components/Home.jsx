import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Happy Birthday My Love ❤️</h1>

      <p>
  This beautiful little girl grew up to become the most precious person in my life.
  From your innocent childhood smile to the strong and beautiful woman you are today,
  every version of you has been magical. You have this rare power to make everything
  around you brighter just by being there.

  <br /><br />

  You don’t just fill my days with happiness — you give my life meaning.
  Every laugh we share, every memory we create, and every dream we talk about
  makes me fall in love with you a little more. On your birthday, I just want
  you to feel how deeply loved, appreciated, and special you are.

  <br /><br />

  This small website is not just a gift, it’s a piece of my heart.
  A place where our memories, my feelings, and my promises to you live forever.
  I hope when you look at these pictures and words, you feel how important
  you are to me — today and always ❤️
</p>


      <div className="home-gallery">
        <img src="/child4.jpeg" />
        <img src="/child1.jpeg" />
        <img src="/child2.jpeg" />
        <img src="/child3.jpeg" />
      </div>

      <button className="main-btn" onClick={() => navigate("/story")}>
        Enter My World 💖
      </button>
    </div>
  );
}


