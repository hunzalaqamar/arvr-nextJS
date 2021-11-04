import "@google/model-viewer";
import { isIOS } from "react-device-detect";

const ModelTree = ({ glb, isCard }) => {
  var urlMaker;

  if (isIOS) {
    urlMaker = "/assests/3d/" + glb + ".usdz";
  } else {
    urlMaker = "/assests/3d/" + glb + ".glb";
  }
  const posterMaker = "/assests/3d/" + glb + ".png";
  console.log(urlMaker);
  return (
    <div>
      {isCard ? (
        isIOS ? (
          <model-viewer
            style={{ width: "100%" }}
            reveal="manual"
            poster={posterMaker}
            ios-src={urlMaker}
            environment-image="neutral"
            ar
            camera-controls
            ar-modes="scene-viewer webxr quick-look"
            shadow-intensity="1"
            background-color="#FFF"
          >
            <button
              slot="ar-button"
              className=" bg-white border rounded position-absolute font-weight-lighter"
              style={{
                top: "10px",
                right: "10px",
              }}
            >
              Activate AR
            </button>
          </model-viewer>
        ) : (
          <model-viewer
            style={{ width: "100%" }}
            reveal="manual"
            poster={posterMaker}
            src={urlMaker}
            environment-image="neutral"
            ar
            camera-controls
            ar-modes="scene-viewer webxr quick-look"
            shadow-intensity="1"
            background-color="#FFF"
          >
            <button
              slot="ar-button"
              className=" bg-white border rounded position-absolute font-weight-lighter"
              style={{
                top: "10px",
                right: "10px",
              }}
            >
              Activate AR
            </button>
          </model-viewer>
        )
      ) : (
        <model-viewer
          style={{ width: "100%", height: "87vh" }}
          src={glb}
          bounds="tight"
          environment-image="neutral"
          camera-controls
          shadow-intensity="1"
          background-color="#FFF"
        ></model-viewer>
      )}
    </div>
  );
};

export default ModelTree;
