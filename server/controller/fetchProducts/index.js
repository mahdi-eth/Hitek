const Products = require("../../model/products");

const getProducts = async (_, res) => {
    const products = await Products.find(
        {},
        { name: 1, image: 1, price: 1, rating: 1 }
    ).lean();
    res.json({ products });
};

module.exports = {
    getProducts
};
