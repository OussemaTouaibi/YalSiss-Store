const Sub = require("../models/sub");
const slugify = require('slugify');


const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')




exports.create = catchAsyncErrors(async (req, res, next) => {
    
    const { name } = req.body;
    const { parent } = req.body;
   await new Sub({ name, parent, slug: slugify(name) }).save();


    res.status(200).json({
        success: true,
 
    })

});


exports.list = catchAsyncErrors(async (req, res, next) => {

    const subs = await Sub.find().exec();

    res.status(200).json({
        success: true,
        subs
 
    })
});


exports.read = catchAsyncErrors(async (req, res, next) => {

  let category = await Category.findOne({slug: req.params.slug}).exec();
  
  res.status(200).json({
    success: true,
    category
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

    const sub = await Sub.findById(req.params.id)

    if (!sub) {

        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await sub.remove()

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    })

});