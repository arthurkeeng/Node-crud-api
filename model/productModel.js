let products = require("../data.json");
const { writeToFile } = require("../writeFile");

const getAll = () => {
  return products;
};

const getSingleProduct = (id) => {
  let newProduct = products.find((item) => item.id == id);

  return newProduct;
};

const addProduct = (product) => {
  let newProduct = {
    id: products.length + 1,
    ...product,
  };
  products.push(newProduct);
  writeToFile("./data.json", products);
  //   let newList = [...products, newProduct];
  //   return newList;
  return products;
};
const updateProduct = (id, newInfo) => {
  const newProduct = products.map((product) => {
    if (product.id === id) {
      return { ...product, ...newInfo };
    }
    return product;
  });
  return newProduct;
};

const deleteProducts = (id) => {
  products = products.filter((product) => product.id != id);
  writeToFile("./data.json", products);
  return products;
};
module.exports = {
  getAll,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProducts,
};
