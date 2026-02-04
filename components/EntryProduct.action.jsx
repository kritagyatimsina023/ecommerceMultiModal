"use server";
import Product from "@/app/model/Products";
import DBConnection from "@/config/config";
import cloudinary from "@/lib/Cloudinary";
import EcommerceUpload from "@/lib/ecommerce-upload";
import { FindDiscountCategory } from "@/lib/DiscountMapping/FindDiscountCategory";
import { revalidatePath } from "next/cache";
import React from "react";

const EntryProduct = async (formData) => {
  // const { name, ProductImage, ProductDescription, ProductClassification } =
  //   Object.fromEntries(formData.entries());
  const name = formData.get("name");
  const ProductImage = formData.getAll("ProductImage");
  const ProductDescription = formData.get("ProductDescription");
  const ProductClassification = formData.get("ProductClassification");
  const BasePrice = Number(formData.get("BasePrice"));
  const discountedPrice = formData.get("discountedPrice");
  // const discountPercentage = Number(formData.get("discountPercentage"));
  const getCategoryDetail = await FindDiscountCategory(ProductClassification);
  const categoryDiscount = getCategoryDetail?.discountPercentage;
  console.log("This is categoryDisconunt", categoryDiscount);
  console.log(
    name,
    ProductImage,
    ProductDescription,
    ProductClassification,
    BasePrice,
    discountedPrice,
    categoryDiscount,
    "These are data",
  );
  const NewdiscountedPrice =
    categoryDiscount > 0
      ? Number(Math.floor(BasePrice * (1 - categoryDiscount / 100)))
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
      discountPercentage: categoryDiscount,
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
        // discountPercentage,
      },
    };
  } catch (error) {
    console.error("DB save error", error);
    return {
      status: 404,
      message: "error occured (internal server)",
    };
  }
};

export default EntryProduct;
