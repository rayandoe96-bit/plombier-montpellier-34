export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-copper bg-surface font-display text-sm font-black text-foreground">
            {index + 1}
          </span>
          <p className="pt-1 text-sm text-muted">{step}</p>
        </li>
      ))}
    </ol>
  );
}
