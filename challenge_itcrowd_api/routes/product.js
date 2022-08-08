const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//CREAR PRODUCTO
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//ACTUALIZAR PRODUCTO
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );
        res.status(200).json(updateProduct);
    } catch (err) { res.statusCode(500).json(err); }
});

//BORRAR PRODUCTO
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("El producto ha sido borrado")
    } catch (err) {
        res.status(500).json(err)
    }
})

//BUSCAR PRODUCTO
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    }
})

//BUSCAR TODOS LOS PRODUCTOS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createAd: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;