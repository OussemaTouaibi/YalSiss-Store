const express = require("express");
const router = express.Router();


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

// controller
const {
	create,
	list,
	read,
	update,
	remove

} = require("../controllers/subController");

// routes
router.route('/admin/sub/new').post(isAuthenticatedUser, authorizeRoles('admin'), create);
router.route('/admin/subs').get(isAuthenticatedUser, authorizeRoles('admin'), list);
router.route('/sub/:slug').get(isAuthenticatedUser, authorizeRoles('admin'), read);
router.route('/sub/:slug').put(isAuthenticatedUser, authorizeRoles('admin'), update);
router.route('/sub/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), remove);




module.exports = router;




module.exports = router;
