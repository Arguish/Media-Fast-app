const router = require("express").Router();
//CRUD
const {} = require("../controllers/media.controller.js");
//

//C
router.post("/", (req, res) => res.send("createMedia"));

//R
router.get("/", (req, res) => res.send("getAllMedia"));
router.get("/newRandom", (req, res) => res.send("getRandom"));
router.get("/:mediaId", (req, res) => res.send("getMediaById"));

//U
router.put("/:mediaId", (req, res) => res.send("updateMedia"));

//D
router.delete("/:mediaId", (req, res) => res.send("deleteMedia"));

module.exports = router;
