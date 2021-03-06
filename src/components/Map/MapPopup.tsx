import React, { useEffect } from "react";
import Link from "next/link";

import { Popup } from "react-map-gl";
import { Text, Link as Anchor, useMediaQuery } from "@geist-ui/react";

import { Contacts } from "./Contacts";
import { getCoordinates } from "./utils";
import { wordSplit } from "core/utils";

export const MapPopup: React.FC<{ place: any; onClose: any }> = ({
  place,
  onClose,
}) => {
  let address = null;
  let center = getCoordinates(place.geo_json);

  const isXS = useMediaQuery("mobile");

  useEffect(() => {
    center = getCoordinates(place.geo_json);
    if (center.latitude && center.longitude) {
      address = fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${center.latitude}&lon=${center.longitude}&zoom=18&accept-language=it`
      ).then((r) => r.json());
    }
  }, [place]);

  useEffect(() => {
    if (address)
      fetch("/api/address", {
        method: "POST",
        body: JSON.stringify({ id: place.id, address }),
      })
        .then((res) => console.log("API Response :", res))
        .catch((e) => console.error("API Error : " + e));
  }, [address]);

  return (
    <Popup
      latitude={center.latitude}
      longitude={center.longitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => onClose(false)}
    >
      <div
        style={{
          minHeight: "120px",
          maxHeight: "260px",
          maxWidth: isXS ? undefined : "38vw",
          padding: ".5rem",
        }}
      >
        <Text h4>{place.nome}</Text>
        {address && <span>{address.display_name}</span>}
        <Text>{wordSplit(place.descrizione)}</Text>
        <Contacts place={place} />
        <Link
          href="/esplora/[slug]"
          as={`/esplora/${place.slug}`}
          prefetch={false}
        >
          <Anchor block>Scopri questo luogo</Anchor>
        </Link>
      </div>
    </Popup>
  );
};
