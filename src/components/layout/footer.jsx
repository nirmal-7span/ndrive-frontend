import Container from "./container";
import Logo from "./logo";

function Footer() {
  return (
    <div className="border-t bg-muted text-xs">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <Logo />

          <span className="text-xs font-medium">
            we are not linked with cars24 or any other company, it's just a
            project for acedamic purpose
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
