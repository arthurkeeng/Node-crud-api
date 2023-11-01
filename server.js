const http = require("http");
const PORT = 4000;
const {
  getAllProducts,
  getSingleProduct,
  createNewProducts,
  updateProduct,
  deleteProduct,
} = require("./controllers/productControllers");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    getAllProducts(req, res);
  }

  if (req.url.match(/\/([0-9]+)/)) {
    const id = req.url.split("/")[1];
    getSingleProduct(req, res, id);
  }

  if (req.url === "/product/create") {
    createNewProducts(req, res);
  }

  if (req.url.match(/\/products\/([0-9]+)/)) {
    const id = req.url.split("/")[2];
    updateProduct(req, res, id);
  }

  if (req.url.match(/\/products\/delete\/([0-9]+)/)) {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  }
});

server.listen(PORT, () => console.log("port is listening on " + PORT));
