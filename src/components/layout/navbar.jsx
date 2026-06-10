import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./logo";
import Container from "./container";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Logo />

          <Input placeholder="Search" className="flex-1 max-w-lg" />

          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => navigate("/cars")}
          >
            Browse cars
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
