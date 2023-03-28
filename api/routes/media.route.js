const router = require("express").Router();
//CRUD
const {} = require("../controllers/media.controller.js");
//
function log(str) {
  console.log("str");
}
//C
router.post("/", log("post"));

//R
router.get("/", log("get all"));
router.get("/newRandom", log("get 1"));
router.get("/:mediaId", log("get Random"));

//U
router.put("/:mediaId", log("put"));

//D
router.delete("/:mediaId", log("delete"));

module.exports = router;
