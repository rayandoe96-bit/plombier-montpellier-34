export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-sm text-foreground/80">{step}</p>
        </li>
      ))}
    </ol>
  );
}
