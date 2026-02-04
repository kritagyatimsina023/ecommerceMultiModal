import React from "react";
import cloudinary from "./Cloudinary";

const EcommerceUpload = async (file, folder) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        async (error, result) => {
          if (error) {
            return reject(error.message);
          }
          return resolve(result);
        },
      )
      .end(bytes);
  });
};

export default EcommerceUpload;
