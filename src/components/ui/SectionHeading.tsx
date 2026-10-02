export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className={`pipe-tag ${tone === "dark" ? "text-copper-hi" : "text-copper"}`}>{eyebrow}</p>
      ) : null}
      <Tag
        className={`mt-3 text-3xl font-extrabold uppercase leading-none tracking-tight font-condensed sm:text-4xl ${
          tone === "dark" ? "text-on-deep" : "text-foreground"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-3 text-base ${tone === "dark" ? "text-on-deep-muted" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
