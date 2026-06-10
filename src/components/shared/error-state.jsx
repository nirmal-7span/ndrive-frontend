import PageLayout from "@/components/layout/page-layout";
import Container from "@/components/layout/container";

export default function ErrorState({ message }) {
  return (
    <PageLayout>
      <Container>
        <p className="mt-8 text-center text-muted-foreground">{message}</p>
      </Container>
    </PageLayout>
  );
}
