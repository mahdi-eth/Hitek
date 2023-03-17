const products = require("../../model/products");

const fetchProduct =async (req, res) => {
  const singleproduct= await products.findById('640cf37871a98b0151ed6b8a',{})
 res.json({singleproduct})
}

module.exports = {
  fetchProduct,
}
