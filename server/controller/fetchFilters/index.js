const Brands = require("../../model/brands");

const CPUs = ["2.4 GHz", "3.2 GHz", "2.84 GHz", "3.2 GHz", "2.9 GHz"];

const getFilters = async (_, res) => {
    const brandsDB = await Brands.find({}, { name: 1, _id: 0 });
    const brands = brandsDB.map((br) => br.name);
    res.json({ brands, CPUs });
};

module.exports = {
    getFilters
};
