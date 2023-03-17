const products = require("../../model/products");

const fetchSingleProduct =async (_, res) => {

  const product = await products.find(
    {},
    { name: 1, image: 1, price: 1, rating: 1 }
).lean();
res.json({ product });
};

module.exports = {
  fetchSingleProduct,
};
