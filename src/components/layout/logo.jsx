import logo from "@/assets/logos/NDrive Logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="NDrive logo" className="h-12 w-auto" />
    </Link>
  );
}

export default Logo;
