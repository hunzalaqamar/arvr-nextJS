import "@google/model-viewer";

const ModelTree = ({ glb, isCard }) => {
  return (
    <div>
      {isCard ? (
        <model-viewer
          style={{ width: "100%" }}
          src={glb}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          loading="auto"
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
          style={{ width: "100%", height: "87vh" }}
          src={glb}
          loading="auto"
          camera-controls
        ></model-viewer>
      )}
    </div>
  );
};

export default ModelTree;
