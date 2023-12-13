import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    if (typeof onImageUpload === "function") {
      setLoading(true); 
      onImageUpload(selectedImage).finally(() => setLoading(false));
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {loading && <p>Uploading to our API <span role="img" aria-label="loading">⏳</span></p>}
    </div>
  );
};

export default ImageUploader;
