"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useState } from "react";

const InfoMedia = () => {
  const [image, setImage] = useState([]);

  useGSAP(() => {
    const headingSplit = SplitText.create(".general-heading", {
      type: "chars",
    });
    const tl = gsap.timeline();
    tl.from(headingSplit.chars, {
      yPercent: 200,
      ease: "circ.inOut",
      stagger: 0.02,
    })
      .from(".labels", {
        xPercent: -200,
        ease: "power1.inOut",
      })
      .from(".inputs", {
        yPercent: 200,
        ease: "power1.inOut",
      });
  }, []);

  const handleChangeImage = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImage((prev) => [...prev, ...previews]);
  };

  const handleRemoveImage = (index) => {
    setImage((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };
  return (
    <section className="mt-3 rounded-lg flex flex-col md:flex-row gap-5">
      <div className="flex flex-col  items-start w-full shadow-md rounded-md px-5 py-6">
        <h1 className="font-bold overflow-hidden general-heading text-xl">
          General Information
        </h1>
        <div className="flex flex-col overflow-hidden  w-full">
          <label
            htmlFor="name"
            className="text-neutral-500 labels overflow-hidden"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="border-1 inputs outline-none  border-neutral-300 rounded-md"
          />
        </div>
        <div className="flex flex-col  w-full overflow-hidden">
          <label
            htmlFor="ProductDescription"
            className="text-neutral-500 labels"
          >
            Description
          </label>
          <textarea
            type="text"
            name="ProductDescription"
            className="border-1 inputs  h-40 border-neutral-300 rounded-md"
          />
        </div>
      </div>
      {/* right  */}
      <div className="flex flex-col items-start md:w-[70%] shadow-md rounded-md px-5 py-6">
        <h1 className="font-bold text-xl general-heading overflow-hidden">
          Product Media
        </h1>
        <div className="flex flex-col items-start w-full overflow-hidden">
          <label
            htmlFor="Description"
            className="text-neutral-500 labels text-sm"
          >
            Photo Product
          </label>
          <div className="rounded-md inputs overflow-hidden border-2 border-dotted flex w-full border-neutral-500 items-center justify-start flex-wrap gap-2 py-3 px-1">
            {image.length === 0 && (
              <p className="text-sm text-neutral-400">No image selected</p>
            )}

            {image.map((img, idx) => (
              <div
                key={idx}
                className="w-20 relative h-20 overflow-hidden rounded-md"
              >
                <img
                  src={img.preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 bg-black/60
                   text-white w-5 h-5  rounded-full text-xs flex 
                   items-center justify-center 
                   group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center overflow-hidden justify-center mt-3">
            <label className="cursor-pointer inputs  text-blue-600 bg-blue-500/20 px-2 py-1 border-1 rounded-md">
              Add more image
              <input
                onChange={handleChangeImage}
                name="ProductImage"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMedia;
