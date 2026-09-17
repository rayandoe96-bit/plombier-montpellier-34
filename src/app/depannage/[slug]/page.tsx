import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/content/services";
import { ServiceDetail } from "@/components/marketing/ServiceDetail";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/depannage/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.need,
  };
}

export default async function ServicePage({ params }: PageProps<"/depannage/[slug]">) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
