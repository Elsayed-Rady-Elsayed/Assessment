"use client";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import i18next from "i18next";
import "./map.css";
const MapComponent = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
});

const Map = () => {
  const location: LatLngExpression = [30.0616113, 31.3368422];
  const customIcon = new L.Icon({
    iconUrl:
      "https://imgs.search.brave.com/ApJIYKDK7IGJuNPMwxqzH5HiB2K7pM7QJC2EpHmkqoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1sb2Nh/dGlvbi1maWxlLWxv/Y2F0aW9uLWljb24t/cG5nLTI4Ny5wbmc",
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="w-full h-[400px]" style={{
      boxShadow:"inset 0px 0px 10px rgba(0,0,0,0.5)"
    }}>
      <MapComponent center={location} zoom={13} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location} icon={customIcon}>
          <Tooltip direction="top" offset={[0, -35]} opacity={1} permanent className="custom-tooltip">
            {i18next.t("mapToolTip")}
          </Tooltip>
        </Marker>
      </MapComponent>
    </div>
  );
};

export default Map;
