const ProductCategory = [
  { id: 1, name: "Electronics", disPercent: 3 },
  { id: 2, name: "Fashion", disPercent: 4 },
  { id: 3, name: "Home & Kitchen", disPercent: 6.65 },
  { id: 4, name: "Beauty & Personal Care", disPercent: 2 },
  { id: 5, name: "Sports & Outdoors", disPercent: 7.45 },
  { id: 6, name: "Toys & Games", disPercent: 6 },
  { id: 7, name: "Automotive", disPercent: 6.65 },
  { id: 8, name: "Books, Music & Media", disPercent: 6.65 },
  { id: 9, name: "Health & Wellness", disPercent: 4.75 },
  { id: 10, name: "Grocery & Gourmet", disPercent: 10 },
];
export async function FindDiscountCategory(ProductClassification) {
  const classification = ProductCategory.find(
    (item, idx) => item.name === ProductClassification,
  );
  console.log("This is common classification", classification);
}
