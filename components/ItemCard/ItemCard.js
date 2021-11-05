import React from "react";
import dynamic from "next/dynamic";
import { Container, Button } from "react-bootstrap";
import {
  isAndroid,
  isConsole,
  isIOS,
  isMobileOnly,
  isSmartTV,
  isTablet,
  isWearable,
  isWinPhone,
} from "react-device-detect";
import { useRouter } from "next/router";

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
          {!isMobileOnly &&
            !isWinPhone &&
            !isTablet &&
            !isSmartTV &&
            !isWearable &&
            !isIOS &&
            !isAndroid &&
            !isConsole && (
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
