import { useEffect, useRef } from "react";
import { locations } from "../../data/locations";
import "leaflet/dist/leaflet.css";

const LOCATION_POINTS = locations
  .filter((loc) => loc.geo)
  .map((loc) => ({
    name: loc.name,
    lat: Number(loc.geo!.latitude),
    lng: Number(loc.geo!.longitude),
  }));

type Point = { lat: number; lng: number };

function cross(o: Point, a: Point, b: Point): number {
  return (a.lng - o.lng) * (b.lat - o.lat) - (a.lat - o.lat) * (b.lng - o.lng);
}

/**
 * Build a convex hull from the approved location points so the service-area
 * polygon tightly wraps only the configured towns.
 */
function buildConvexHull(points: Point[]): Point[] {
  if (points.length <= 3) return [...points];

  const sorted = [...points].sort((p1, p2) =>
    p1.lng === p2.lng ? p1.lat - p2.lat : p1.lng - p2.lng
  );

  const lower: Point[] = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
      lower.pop();
    }
    lower.push(point);
  }

  const upper: Point[] = [];
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const point = sorted[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
      upper.pop();
    }
    upper.push(point);
  }

  lower.pop();
  upper.pop();
  return [...lower, ...upper];
}

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: [56.02, -4.42],
        zoom: 9,
        scrollWheelZoom: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const bounds = L.default.latLngBounds([]);
      LOCATION_POINTS.forEach((point) => {
        bounds.extend([point.lat, point.lng]);
      });

      const hull = buildConvexHull(LOCATION_POINTS);
      if (hull.length >= 3) {
        L.default.polygon(
          hull.map((p) => [p.lat, p.lng] as [number, number]),
          {
            color: "#0d5c2e",
            weight: 2,
            fillColor: "#0d5c2e",
            fillOpacity: 0.2,
          }
        ).addTo(map);
      }

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [24, 24] });
      }
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-0 isolate">
      <div
        ref={containerRef}
        className="w-full h-full min-h-[280px] lg:min-h-[320px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 [&_.leaflet-control]:!z-[100] [&_.leaflet-pane]:!z-[1]"
        aria-label="Map showing Double O Detailing service area near Loch Lomond and Glasgow West End"
      />
    </div>
  );
}
