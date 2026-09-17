export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 text-base text-foreground/70">{description}</p>
      ) : null}
    </div>
  );
}
