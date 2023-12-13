import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import DocViewer from "./components/docViewer/docViewerComponent";
import ImageUploader from "./components/imageUploader/ImageUploaderComponent";
import ResultViewer from "./components/resultViewer/resultViewerComponent";

const ReceiptExtractor = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [jsonData, setJsonData] = useState();

  const handleImageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("userId", 2);
    formData.append("documentClassification", "nfs");

    try {
      const response = await fetch(
        "https://homol.extraidados.com.br/api/portalEngines-processApp/process",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "sntsXK03MdRYmixkJTnbXMdTb4cnLFCtcdpPEdrAvLEY4O4Y5w",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }

      const data = await response.json();

      setJsonData(data.resultados[0].camposExtraidos);
      setImageUrl(URL.createObjectURL(image));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    console.log("jsonData changed:", jsonData);
  }, [jsonData]);

  useEffect(() => {
    console.log("imageUrl changed:", imageUrl);
  }, [imageUrl]);

  return (
    <Container className="text-center mt-5">
      <section>
        <ImageUploader onImageUpload={handleImageUpload} />
      </section>
      <section className="d-flex justify-content-center my-2">
        <section className="mx-3">
          <ResultViewer imageUrl={imageUrl} />
        </section>
        <section className="mx-3">
          <DocViewer jsonData={jsonData} />
        </section>
      </section>
    </Container>
  );
};

export default ReceiptExtractor;
