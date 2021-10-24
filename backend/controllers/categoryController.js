const Category = require("../models/category");
const Sub = require("../models/sub")
const Product = require("../models/product")
const slugify = require('slugify');


const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')



// Create new category   =>   /api/v1/admin/category/new
exports.create = catchAsyncErrors(async (req, res, next) => {
     const { name } = req.body;
 

     await new Category({name, slug: slugify(name)}).save();

    res.status(200).json({
        success: true,
 
    })

});


exports.list = catchAsyncErrors(async (req, res, next) => {

    const categories = await Category.find().exec();

    res.status(200).json({
        success: true,
        categories
 
    })
});


exports.read = catchAsyncErrors(async (req, res, next) => {

  let category = await Category.findOne({slug: req.params.slug}).exec();
  
  const products = await Product.find({ category })
  .populate("category")
  .populate("_id name")
  .exec();
  res.status(200).json({
    success: true,
    category,
    products,
})
});


exports.update = catchAsyncErrors(async (req, res, next) => {
    
    const { name } = req.body;

    const category = await Category.findOneAndUpdate({slug: req.params.slug}, 
    {name, slug: slugify(name)},
    { new: true }
    );

    await category.save()
    res.status(200).json({
        success: true,
    })

});


exports.remove = catchAsyncErrors(async (req, res, next) => {

    const category = await Category.findById(req.params.id)

    if (!category) {

        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await category.remove()

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    })

});




  exports.getSubs = catchAsyncErrors(async (req, res, next) => {
    Sub.find({ parent: req.params._id }).exec((err, subs) => {
      if (err) console.log(err);
      res.json(subs);
    })
});


exports.getProductsByCategory = catchAsyncErrors(async (req, res, next) => {

    let products = await Product.findOne({slug: req.params.slug}).exec();
    
    res.status(200).json({
      success: true,
      products
  })
  });