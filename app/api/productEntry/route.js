import Product from "@/app/model/Products";
import DBConnection from "@/config/config";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, ProductImage, ProductDescription, ProductClassification } =
      await req.json();
    await DBConnection();
    const product = await Product.create({
      name,
      ProductImage,
      ProductDescription,
      ProductClassification,
    });
    console.log("User data", product);
    if (!product) {
      throw new Error("Product not found");
    }
    return NextResponse.json(
      { message: "Success", data: product },
      { status: 201 },
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
