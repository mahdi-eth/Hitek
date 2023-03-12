const Products = require("../../model/products");

const postFilters = async (req, res) => {
  const [brands, CPUs, isAvailable] = req.body;

  try {
    const products = await Products.find({
      brand: { $in: brands },
      "features.cpu": { $in: CPUs },
      available: isAvailable,
    });

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  postFilters,
};
