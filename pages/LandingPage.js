import React from "react";
import companyLogo from "../public/assests/companyLogo.png";
import Header from "../components/Header/Header";
import { companyWebsiteSrc } from "../constants/companyWebsite";
import ItemCard from "../components/ItemCard/ItemCard";
import { AndroidObjs } from "../constants/3dObj";
import { IPhoneObjs } from "../constants/3dObj";
import { Col, Row } from "react-bootstrap";
import { isIOS } from "react-device-detect";

function LandingPage() {
  return (
    <div>
      <div>
        <Header
          logo={companyLogo}
          productName={"AR-VR"}
          productPhrase={"Powered By Luminogics"}
          companyWebsite={companyWebsiteSrc}
          isViewLarge={false}
        />
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="w-100">
        {isIOS
          ? IPhoneObjs.map((objname) => (
              <Col key={objname}>
                <ItemCard GLBName={objname} />
              </Col>
            ))
          : AndroidObjs.map((objname) => (
              <Col key={objname}>
                <ItemCard GLBName={objname} />
              </Col>
            ))}
      </Row>
    </div>
  );
}

export default LandingPage;
