const Products = require("../../model/products");

const fetchProduct = async (req, res) => {
    try {
      const { id } = req.body;
      const singleproduct = await Products.findById(id, 'name brand image rating features available price').lean();
      if (!singleproduct) {
        return res.status(404).json({ message: "Not found" });
      }
      return res.status(200).json({ product: singleproduct });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    fetchProduct
};
