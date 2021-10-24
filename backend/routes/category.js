const express = require("express");
const router = express.Router();


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

// controller
const {
	create,
	list,
	read,
	update,
	remove,
	getSubs,

} = require("../controllers/categoryController");

// routes
router.route('/admin/category/new').post(isAuthenticatedUser, authorizeRoles('admin'), create);
router.route('/categories').get(isAuthenticatedUser, authorizeRoles('admin'), list);
router.route('/category/:slug').get(isAuthenticatedUser, authorizeRoles('admin'), read);
router.route('/category/:slug').put(isAuthenticatedUser, authorizeRoles('admin'), update);
router.route('/category/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), remove);
router.route('/category/subs/:_id').get(isAuthenticatedUser, authorizeRoles('admin'), getSubs);






module.exports = router;