"use server";
import Product from "@/app/model/Products";
import DBConnection from "@/config/config";
import cloudinary from "@/lib/Cloudinary";
import EcommerceUpload from "@/lib/ecommerce-upload";
import { FindDiscountCategory } from "@/run";
import { revalidatePath } from "next/cache";
import React from "react";

const EntryProduct = async (formData) => {
  // const { name, ProductImage, ProductDescription, ProductClassification } =
  //   Object.fromEntries(formData.entries());
  const name = formData.get("name");
  const ProductImage = formData.getAll("ProductImage");
  const ProductDescription = formData.get("ProductDescription");
  const ProductClassification = formData.get("ProductClassification");
  const BasePrice = formData.get("BasePrice");
  const discountedPrice = formData.get("discountedPrice");
  const discountPercentage = Number(formData.get("discountPercentage"));
  console.log(
    name,
    ProductImage,
    ProductDescription,
    ProductClassification,
    BasePrice,
    discountedPrice,
    discountPercentage,
    "These are data",
  );
  // const getCategoryDetail = await FindDiscountCategory(ProductClassification);
  // const categoryDiscount = getCategoryDetail?.discountPercentage ?? 0;
  const NewdiscountedPrice =
    discountPercentage > 0
      ? Math.floor(BasePrice * (1 - discountPercentage / 100))
      : BasePrice;
  try {
    await DBConnection();
    const uploadedImages = await Promise.all(
      ProductImage.map((img) => EcommerceUpload(img, "ecommerce-upload")),
    );
    console.log("this is image upload", uploadedImages);
    const product = await Product.create({
      name,
      ProductImage: uploadedImages.map((img) => img.url),
      ProductDescription,
      ProductClassification,
      BasePrice,
      discountedPrice: NewdiscountedPrice,
      discountPercentage: discountPercentage,
    });
    if (!product) {
      throw new Error("No product found");
    }
    revalidatePath("/admin/allProdutcs");
    return {
      data: {
        _id: product._id.toString(),
        name: product.name,
        ProductImage: product.ProductImage,
        ProductDescription: product.ProductDescription,
        ProductClassification: product.ProductClassification,
        BasePrice,
        discountedPrice,
        discountPercentage,
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 404,
      message: "error occured (internal server)",
    };
  }
};

export default EntryProduct;
