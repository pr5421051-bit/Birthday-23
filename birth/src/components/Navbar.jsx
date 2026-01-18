import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/story">Our Story</Link>
      <Link to="/letter">Letter</Link>
      <Link to="/surprise">Surprise</Link>
      <Link to="/final">Forever</Link>
    </div>
  );
}
