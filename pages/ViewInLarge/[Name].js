import React from "react";
import companyLogo from "../../public/assests/companyLogo.png";
import Header from "../../components/Header/Header";
import dynamic from "next/dynamic";

import { companyWebsiteSrc } from "../../constants/companyWebsite";

const ModelTree = dynamic(
  () => {
    return import("../../components/ModelTree/ModelTree");
  },
  { ssr: false }
);

function Name({ modelName }) {
  const model = "/assests/3d/" + modelName + ".glb";

  return (
    <div>
      <div>
        <Header
          logo={companyLogo}
          productName={"AR-VR"}
          productPhrase={"Powered By Luminogics"}
          companyWebsite={companyWebsiteSrc}
          isViewLarge={true}
        />
      </div>
      <div className="w-100 h-100 mx-auto my-auto">
        <ModelTree glb={model} isCard={false} />
      </div>
    </div>
  );
}

export const getServerSideProps = (pageContext) => {
  const modelName = pageContext.query.Name;
  return {
    props: {
      modelName,
    },
  };
};

export default Name;
