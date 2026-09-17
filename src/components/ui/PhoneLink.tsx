import { businessInfo } from "@/lib/content/business";

export function PhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={businessInfo.phoneHref} className={className}>
      {children ?? businessInfo.phone}
    </a>
  );
}
