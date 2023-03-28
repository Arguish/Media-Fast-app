
const router = require("express").Router();
//
router.use('/platform', require('./platform.route'))
router.use('/user', require('./user.route'))
router.use("/media", require("./media.route"));
router.use('/category', require('./category.route'))
router.use('/private_info', require('./private_info.route'))

router.get("/", (req, res) => {
  res.send("API OK ^,_,^");
});

module.exports = router;

