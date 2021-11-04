import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Container, Button } from "react-bootstrap";
import { isMobileOnly } from "react-device-detect";
import { useRouter } from "next/router";
import src from "../../public/assests/3d/Lamp.png";

const ModelTree = dynamic(
  () => {
    return import("../ModelTree/ModelTree");
  },
  { ssr: false }
);

function ItemCard({ GLBName }) {
  const router = useRouter();
  const tempCardName = GLBName.split("_");
  let cardName = "";
  tempCardName.length > 1 &&
    (cardName = tempCardName[0] + " " + tempCardName[1]);
  return (
    <Container className="d-flex justify-content-center">
      <div className="card mt-2 rounded" style={{ width: "19rem" }}>
        <div className="card-img-top">
          <ModelTree glb={GLBName} isCard={true} />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{cardName || tempCardName}</h5>
          {!isMobileOnly && (
            <Button
              variant="primary"
              onClick={() => router.push("/ViewInLarge/" + GLBName)}
            >
              View in Full Screen
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ItemCard;
