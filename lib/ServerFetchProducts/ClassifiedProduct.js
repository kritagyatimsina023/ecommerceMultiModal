"use server";
import Product from "@/app/model/Products";
import DBConnection from "@/config/config";

export async function FetchClassifiedProduct(classifiedValue) {
  try {
    await DBConnection();
    const classifiedProduct = await Product.find({
      ProductClassification: classifiedValue,
    }).lean();
    console.log("server product classification", classifiedProduct);
    if (!classifiedProduct) {
      throw new Error(`No product under ${classifiedProduct}  category found`);
    }
    if (!classifiedProduct || classifiedProduct.length === 0) {
      return { status: 404, data: [] };
    }
    return {
      status: 200,
      data: classifiedProduct.map((p, idx) => ({
        ...p,
        _id: p._id.toString(),
      })),
    };
  } catch (error) {
    console.log("Error from product category server", error);
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}
