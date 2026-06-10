import Container from "./container";
import Logo from "./logo";

function Footer() {
  return (
    <div className="border-t bg-muted text-xs">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <Logo />
          <p className="text-xs font-medium">It drives to your destination.</p>

          <span className="text-xs font-medium">© 2026 NDrive</span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
