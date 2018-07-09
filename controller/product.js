var Product = require('../model/product');
var multer = require('multer');

let store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
    }
});

let upload = multer({storage: store}).single('file');

var createProduct = (req, res, next) => {
    console.log('this is create product');

    var name = req.body.name,
        description = req.body.description,
        price = req.body.price;

        var myProduct = new Product({
            name: name,
            description: description,
            price: price
        });

        myProduct.save((err, product) => {
            if(err) {
                return res.status(404).json({
                    message: err,
                    success: false
                });
            }
            else {
                return res.status(200).json({
                    success: true,
                    data: product
                });
            }
        });
};

var getProduct = (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {

            return res.status(200).json({
                success: true,
                data: product
            });
        }
    });
}

var getAllProduct = (req, res, next) => {
    Product.find( (err, product) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            console.log("product have been gotten");
            // console.log(product);

            return res.status(200).json({
                success: true,
                data: product
            });
        }
    });
}

var updateProduct = (req, res, next) => {
    console.log("update product");
    upload(req, res, (err) => {
        if (err) {
            console.log('In save upload error: ' + err);
            return res.status(404).json({
                message: err,
                success: false
            });
        } else {


            console.log('In upload yes');

            var name = req.body.name,
                picture = req.file.filename ,
                description = req.body.description,
                price = req.body.price;

            Product.findById(req.params.id, (err, product) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    product.name = name || product.name;
                    product.picture = picture || product.picture;
                    product.description = description || product.description;
                    product.price = price || product.price;

                    product.save((err, product) => {
                        if(err){
                            return res.status(404).json({
                                message: err,
                                success: false
                            });
                        }
                        else {
                            return res.status(200).json({
                                success: true,
                                data: product
                            });
                        }
                    });
                }
            });

        }
    });

    // var name = req.body.name,
    //     description = req.body.description,
    //     price = req.body.price;
    //
    // Product.findById(req.params.id, (err, product) => {
    //     if(err){
    //         console.log(err);
    //
    //         return res.status(404).json({
    //             message: err,
    //             success: false
    //         });
    //     }
    //     else {
    //         product.name = name || product.name;
    //         product.description = description || product.description;
    //         product.price = price || product.price;
    //
    //         product.save((err, product) => {
    //             if(err){
    //                 return res.status(404).json({
    //                     message: err,
    //                     success: false
    //                 });
    //             }
    //             else {
    //                 return res.status(200).json({
    //                     success: true,
    //                     data: product
    //                 });
    //             }
    //         });
    //     }
    // });
}



var updateProduct2 = (req, res, next) => {
    console.log("update product2");

    var name = req.body.name,
        // picture = req.file.filename,
        description = req.body.description,
        price = req.body.price;

    Product.findById(req.params.id, (err, product) => {
        if (err) {
            console.log(err);
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            console.log("Succeed");
            product.name = name || product.name;
            // product.picture = picture || product.picture;
            product.description = description || product.description;
            product.price = price || product.price;

            product.save((err, product) => {
                if (err) {
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        data: product
                    });
                }
            });
        }
    });

}

var deleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                message: "Product deleted",
                success: true
            });
        }
    });
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    updateProduct2
}