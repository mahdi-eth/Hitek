const Products = require("../../model/products");

const filterHeader = async (req, res) => {
    const { brand, type } = req.body;

    try {
        const products = await Products.find(
            {
                brand: { $regex: new RegExp(brand, "i") },
                type: { $regex: type.slice(0, -1), $options: "i" }
            },
            {
                _id: 1,
                name: 1,
                image: 1,
                price: 1,
                rating: 1
            }
        );
        return res.json(products);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    filterHeader
};
