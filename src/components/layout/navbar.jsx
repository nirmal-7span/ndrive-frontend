import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Container from "./container";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Logo />

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </Button>

            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => navigate("/cars")}
            >
              Browse cars
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
