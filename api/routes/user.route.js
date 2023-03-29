const {
  getUsers,
  getOneUser,
  updateUser,
  createUser,
  deleteUser,
  getOwnUser,
  getOwnUserMedia,
  addMediaToOwnUser,
  getUserMedia,
  updateOwnUser,
  deleteOwnUser,
} = require("../controllers/user.controller");
const { checkAdmin, checkAuth } = require("../middleware/auth");
const { goAdmin, goUser } = require("../middleware/authCopy");

const router = require("express").Router();

router.get("/", goAdmin, getUsers);
router.get("/me", goUser, getOwnUser);
router.get("/me/user_media", checkAuth, getOwnUserMedia);

router.get("/:userId", checkAuth, checkAdmin, getOneUser);
router.get("/:userId/user_media", checkAuth, checkAdmin, getUserMedia);

router.put("/me", checkAuth, updateOwnUser);
router.put("/:userId", checkAuth, checkAdmin, updateUser);
router.post("/", checkAuth, checkAdmin, createUser);
router.post("/me/user_media/:mediaId", checkAuth, addMediaToOwnUser);
router.delete("/me", checkAuth, deleteOwnUser);
router.delete("/:userId", checkAuth, checkAdmin, deleteUser);

module.exports = router;
