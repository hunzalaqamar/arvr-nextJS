import React from "react";
import dynamic from "next/dynamic";
import { Container, Button } from "react-bootstrap";
import { isMobileOnly } from "react-device-detect";
import { useRouter } from "next/router";

const ModelTree = dynamic(
  () => {
    return import("../ModelTree/ModelTree");
  },
  { ssr: false }
);

function ItemCard({ GLBName }) {
  const router = useRouter();
  const UrlMaker = "/assests/3d/" + GLBName + ".glb";
  return (
    <Container className="d-flex justify-content-center">
      <div className="card mt-3" style={{ width: "19rem" }}>
        <div className="card-img-top">
          <ModelTree glb={UrlMaker} isCard={true} />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{GLBName}</h5>
          {!isMobileOnly && (
            <Button
              variant="outline-primary"
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
