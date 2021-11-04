import React from "react";
import companyLogo from "../public/assests/companyLogo.png";
import Header from "../components/Header/Header";
import { companyWebsiteSrc } from "../constants/companyWebsite";
import ItemCard from "../components/ItemCard/ItemCard";
import { objs } from "../constants/3dObj";
import { Col, Row } from "react-bootstrap";
import dynamic from "next/dynamic";

const ModelTree = dynamic(
  () => {
    return import("../components/ModelTree/ModelTree");
  },
  { ssr: false }
);

function LandingPage() {
  return (
    <div>
      <ModelTree glb={"/assests/3d/Lamp.glb"} isCard={true} />

      {/* <div>
        <Header
          logo={companyLogo}
          productName={"AR-VR"}
          productPhrase={"Powered By Luminogics"}
          companyWebsite={companyWebsiteSrc}
          isViewLarge={false}
        />
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="w-100">
        {objs.map((objname) => (
          <Col key={objname}>
            <ItemCard GLBName={objname} />
          </Col>
        ))}
      </Row> */}
    </div>
  );
}

export default LandingPage;
