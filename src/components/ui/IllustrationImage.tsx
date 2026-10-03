import Image from "next/image";
import type { Illustration } from "@/lib/content/illustrations";

export function IllustrationImage({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  image: Illustration;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-50 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="absolute right-2 top-2 rounded bg-deep/70 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-on-deep">
        Photo d&apos;illustration
      </span>
    </div>
  );
}
