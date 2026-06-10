import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./logo";
import Container from "./container";

function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Logo />

          <Input placeholder="Search" className="flex-1 max-w-lg" />

          <Button variant="outline">Browse cars</Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
