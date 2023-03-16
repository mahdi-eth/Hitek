const Brands = require("../../model/brands");

const createNewBrand = async () => {
    const isNotEmpty = await Brands.findOne({});
    if (!isNotEmpty) {
        const brands = [
            {
                name: "Apple",
                macbook: true,
                tablet: false,
                iphone: true,
                phone: false
            },
            {
                name: "Samsung",
                macbook: false,
                tablet: true,
                iphone: false,
                phone: true
            },
            {
                name: "Microsoft",
                macbook: true,
                tablet: true,
                iphone: false,
                phone: false
            },
            {
                name: "Dell",
                macbook: true,
                tablet: false,
                iphone: false,
                phone: false
            },
            {
                name: "HP",
                macbook: true,
                tablet: true,
                iphone: false,
                phone: false
            },
            {
                name: "Lenovo",
                macbook: true,
                tablet: true,
                iphone: false,
                phone: false
            },
            {
                name: "Asus",
                macbook: true,
                tablet: true,
                iphone: false,
                phone: false
            },
            {
                name: "Acer",
                macbook: true,
                tablet: true,
                iphone: false,
                phone: false
            },
            {
                name: "LG",
                macbook: false,
                tablet: true,
                iphone: false,
                phone: true
            },
            {
                name: "Sony",
                macbook: false,
                tablet: true,
                iphone: false,
                phone: true
            },
            {
                name: "Nokia",
                macbook: false,
                tablet: false,
                iphone: false,
                phone: true
            },
            {
                name: "Google",
                macbook: false,
                tablet: true,
                iphone: false,
                phone: true
            },
            {
                name: "Huawei",
                macbook: false,
                tablet: true,
                iphone: true,
                phone: true
            },
            {
                name: "Xiaomi",
                macbook: false,
                tablet: true,
                iphone: true,
                phone: true
            }
        ];
        Brands.insertMany(brands);
    }
};

module.exports = { createNewBrand };
