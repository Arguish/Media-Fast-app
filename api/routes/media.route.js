const router = require("express").Router();
//CRUD
const {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
  getRandomMedia,
} = require("../controllers/media.controller.js");
//

//C
router.post("/", createMedia);

//R
router.get("/", getAllMedia);
router.get("/:mediaId", getMediaById);
router.get("/random", getRandomMedia);

//U
router.put("/:mediaId", updateMedia);

//D
router.delete("/:mediaId", deleteMedia);

module.exports = router;
