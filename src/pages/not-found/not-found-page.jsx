import Container from "@/components/layout/container";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Container>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl font-medium">Page Not Found</p>
          <Button onClick={() => navigate("/")} className="mt-6">
            Back to Home
          </Button>
        </div>
      </Container>
    </PageLayout>
  );
}

export default NotFoundPage;
