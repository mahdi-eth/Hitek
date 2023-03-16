const faker = require("faker");
const Products = require("../../model/products");

const brands = [
    "Apple",
    "Samsung",
    "Microsoft",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "LG",
    "Sony",
    "Nokia",
    "Google",
    "Huawei",
    "Xiaomi"
];

const types = ["macbook", "tablet", "iphone", "phone"];

const getRandomFeatures = () => {
    const features = [
        {
            memory: "8GB",
            processor: "Intel Core i5",
            os: "Windows 10 Home",
            cpu: "2.4 GHz"
        },
        {
            memory: "16GB",
            processor: "Intel Core i7",
            os: "MacOS",
            cpu: "3.2 GHz"
        },
        {
            memory: "4GB",
            processor: "Snapdragon 888",
            os: "Android 12",
            cpu: "2.84 GHz"
        },
        {
            memory: "32GB",
            processor: "M1",
            os: "MacOS",
            cpu: "3.2 GHz"
        },
        {
            memory: "6GB",
            processor: "Exynos 2100",
            os: "Android 11",
            cpu: "2.9 GHz"
        }
    ];

    return features[Math.floor(Math.random() * features.length)];
};

const generateRating = () => {
    const rating = (Math.floor(Math.random() * 21) + 40) / 10;
    return Math.min(rating.toFixed(1), 5);
};

const generateRandomProduct = () => {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const name = faker.commerce.productName();
    const rating = generateRating();
    const type = types[Math.floor(Math.random() * types.length)];
    const price = Math.floor(Math.random() * 1000) + 50;
    const features = getRandomFeatures();
    const colors = ["Black", "Silver", "Gold", "Red", "Blue"].sort(
        () => Math.random() - 0.5
    );
    const image = `https://source.unsplash.com/500x500/?${faker.random.word()},technology`;
    const totalReviews = Math.floor(Math.random() * 100000) + 99;
    const available = Math.random() >= 0.2;

    return {
        brand,
        name,
        rating,
        type,
        price,
        features,
        colors,
        image,
        totalReviews,
        available,
        description: faker.lorem.paragraph()
    };
};

const randomProducts = Array.from({ length: 250 }, () =>
    generateRandomProduct()
);

const createProducts = async () => {
    const isNotEmpty = await Products.findOne({});
    if (!isNotEmpty) {
        Products.insertMany(randomProducts);
    }
};

module.exports = { createProducts };
