const router = require("express").Router();
//CRUD
const { checkAdmin, checkAuth } = require("../middleware/auth");
const {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
  getRandomMedia,
  createManyMedia,
  getMediaByCategory,
  getShowByCategory,
} = require("../controllers/media.controller.js");
//

//C
router.post("/", checkAuth, checkAdmin, createMedia);
router.post("/many", checkAuth, checkAdmin, createManyMedia)
//R
router.get("/", checkAuth, getAllMedia);
router.get("/random", checkAuth, getRandomMedia);
router.get("/user/:userId/categories", checkAuth, getMediaByCategory)
router.get("/user/:userId/categories/media/:type", checkAuth, getShowByCategory)

router.get("/:mediaId", checkAuth, getMediaById);
//U
router.put("/:mediaId", checkAuth, checkAdmin, updateMedia);

//D
router.delete("/:mediaId", checkAuth, checkAdmin, deleteMedia);

module.exports = router;
