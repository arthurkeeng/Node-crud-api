const ProductModel = require("../model/productModel");
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log("there was a server error");
  }
};

const getSingleProduct = async (req, res, id) => {
  try {
    const singleProduct = await ProductModel.getSingleProduct(id);
    if (!singleProduct) {
      res.writeHead(401, { "Content-Type": "text/html" });
      res.end("<h3> no such product exist </h3>");
    } else {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.end(JSON.stringify(singleProduct));
    }
  } catch (error) {
    console.log("there was a server error");
  }
};

const createNewProducts = async (req, res) => {
  try {
    const newProduct = {
      name: "jeans top",
      description: "wler lserko ewl row twl woer ltewrew",
      price: 48,
    };
    const addProduct = await ProductModel.addProduct(newProduct);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(addProduct));
    // let body = "";
    // req.on("data", (chunk) => {
    //   body += chunk.toString();
    // });

    // req.on("end", async () => {
    //   const { name, description, price } = JSON.parse(body);

    //   const newProduct = {
    //     name,
    //     description,
    //     price,
    //   };

    //   const addProduct = await ProductModel.addProduct(newProduct);

    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify(addProduct));
    // });
  } catch (error) {
    console.log("there was a server error");
  }
};

const updateProduct = async (req, res, id) => {
  try {
    const info = {
      id,
      description: "the product has been updated ",
      price: 432,
    };
    const newUpdate = await ProductModel.updateProduct(id, info);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(newUpdate);
  } catch (error) {}
};

const deleteProduct = async (req, res, id) => {
  try {
    await ProductModel.deleteProducts(id);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "the product was deleted" }));
  } catch (error) {
    console.log("there was an error serving this page");
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProducts,
  updateProduct,
  deleteProduct,
};
