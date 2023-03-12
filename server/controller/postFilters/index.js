const Products = require("../../model/products");

const postFilters = async (req, res) => {
    const [brands, CPUs, isAvailable] = req.body;
    try {
        const query = {
            $or: [
                { brand: { $in: brands } },
                { "features.cpu": { $in: CPUs } }
            ],
            available: isAvailable || { $exists: true }
        };
        const projection = {
            _id: 1,
            name: 1,
            image: 1,
            price: 1,
            rating: 1
        };
        const products = await Products.find(query, projection);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    postFilters
};
