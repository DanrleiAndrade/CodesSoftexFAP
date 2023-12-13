import React from "react";

const DocViewer = ({ jsonData }) => {
  console.log("DocViewer - jsonData:", jsonData);

  return (
    <div>
      <h2>JSON Display</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default DocViewer;
