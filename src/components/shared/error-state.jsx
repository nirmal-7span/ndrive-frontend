import { Button } from "@/components/ui/button";

export default function ErrorState({
  title = "Something went wrong",
  message,
  actionLabel,
  onAction,
}) {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {message && <p className="text-muted-foreground max-w-md">{message}</p>}
      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          variant="outline"
          className="mt-4 cursor-pointer"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
