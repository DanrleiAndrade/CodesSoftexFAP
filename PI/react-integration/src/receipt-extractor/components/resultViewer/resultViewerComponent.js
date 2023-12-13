import React from "react";

const ResultViewer = ({ imageUrl }) => {
  console.log("ResultViewer - imageUrl:", imageUrl);

  return (
    <div>
      <h2>Image Display</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Displayed" style={{ maxWidth: "100%" }} />
      ) : (
        <p>No image to display</p>
      )}
    </div>
  );
};

export default ResultViewer;
