"use server";
//  <option value="0">Select category</option>
//             <option value="3">Electronics (3%)</option>
//             <option value="4">Fashion (4%)</option>
//             <option value="6.65">Home & Kitchen (6.65%)</option>
//             <option value="2">Beauty & Personal Care (2%)</option>
//             <option value="7.45">Sports & Outdoors (7.45%)</option>
//             <option value="6">Toys & Games (6%)</option>
//             <option value="6.65">Automotive (6.65%)</option>
//             <option value="6.65">Books, Music & Media (6.65%)</option>
//             <option value="4.75">Health & Wellness (4.75%)</option>
//             <option value="10">Grocery & Gourmet (10%)</option>
const ProductCategory = [
  { id: 1, name: "electronics", disPercent: 3 },
  { id: 2, name: "fashion", disPercent: 4 },
  { id: 3, name: "home_kitchen", disPercent: 6.65 },
  { id: 4, name: "beauty", disPercent: 2 },
  { id: 5, name: "sports", disPercent: 7.45 },
  { id: 6, name: "toys", disPercent: 6 },
  { id: 7, name: "automotive", disPercent: 6.65 },
  { id: 8, name: "books", disPercent: 6.65 },
  { id: 9, name: "health", disPercent: 4.75 },
  { id: 10, name: "grocery", disPercent: 10 },
];
export async function FindDiscountCategory(ProductClassification) {
  console.log("This is data from argument", ProductClassification);
  const classification = ProductCategory.find(
    (item, idx) => item.name === ProductClassification,
  );
  console.log("This is from classification", classification);
  if (!classification) {
    return { discountPercentage: 0, category: null };
  }
  return {
    discountPercentage: classification.disPercent,
    category: classification.name,
  };
}
