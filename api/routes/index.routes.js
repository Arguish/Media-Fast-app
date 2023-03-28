const router = require("express").Router();
//

router.use("/media", require("./media.route"));

router.get("/", (req, res) => {
  res.send("API OK ^,_,^");
});

module.exports = router;
