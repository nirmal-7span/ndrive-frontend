import logo from "../../assets/logos/NDrive Logo.png";

function Logo() {
  return (
    <a href="/">
      <img src={logo} alt="NDrive logo" className="h-12 w-auto" />
    </a>
  );
}

export default Logo;
