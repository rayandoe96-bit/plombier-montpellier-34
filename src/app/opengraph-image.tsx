import { ImageResponse } from "next/og";
import { businessInfo } from "@/lib/content/business";
import { getGooglePlace } from "@/lib/google/place";

export const alt = `${businessInfo.tradeName}, plombier chauffagiste à ${businessInfo.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const place = await getGooglePlace();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b2440",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#9cc3ec" }}>
          Plomberie · Chauffage · {businessInfo.city}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{businessInfo.tradeName}</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#d7e6f6" }}>
            {`${businessInfo.ownerName}, artisan depuis ${businessInfo.foundingYear}`}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 40 }}>
          <div style={{ display: "flex", padding: "16px 32px", borderRadius: 999, background: "white", color: "#0b2440", fontWeight: 700 }}>
            {businessInfo.phone}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d7e6f6" }}>
            {`${place.ratingLabel}/5 · ${place.ratingCount} avis Google`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
