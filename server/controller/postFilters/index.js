const Products = require("../../model/products");

const postFilters = async (req, res) => {
    const [brands, CPUs, isAvailable, search] = req.body;
    try {
        let query = {};
        if (brands.length || CPUs.length || isAvailable || search) {
            query.$or = [];
            if (brands.length) {
                query.$or.push({ brand: { $in: brands } });
            }
            if (CPUs.length) {
                query.$or.push({ "features.cpu": { $in: CPUs } });
            }
            if (isAvailable) {
                query.available = true;
            }
            if (search) {
                query.$or.push({ name: { $regex: new RegExp(search, "i") } });
            }
        }
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
