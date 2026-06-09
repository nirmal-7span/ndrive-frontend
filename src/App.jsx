import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button>NDrive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
