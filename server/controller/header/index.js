const Brands = require("../../model/brands");

const getHeaderBrands = async (req, res) => {
    const { type } = req.body;
    const brandsDB = await Brands.find({ [type]: true }, "name");
    const brands = brandsDB.map((br) => br.name);
    res.json({ brands });
};

module.exports = { getHeaderBrands };
