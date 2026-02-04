import Product from "@/app/model/Products";
import DBConnection from "@/config/config";

export async function FetchProducts() {
  try {
    await DBConnection();
    const product = await Product.find().lean();
    //   console.log("this is product", product);
    return product.map((p, idx) => ({
      ...p,
      _id: p._id.toString(),
    }));
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
}
