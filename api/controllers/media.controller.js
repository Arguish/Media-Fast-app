const Media = require("../models/media.model");
const randPicker = require("random-array-picker");
const Category = require("../models/category.model");
const User = require("../models/user.model");

const createMedia = async (req, res) => {
  try {
    const result = await Media.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      Media: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllMedia = async (req, res) => {
  try {
    const result = await Media.findAll();
    if (!result) {
      res.status(404).send("Media not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMediaById = async (req, res) => {
  try {
    const result = await Media.findByPk(req.params.mediaId);
    if (!result) {
      res.status(404).send("Media not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const idRandom = async (req, res) => {
  try {
    const userId = res.locals.privateInfo.userId;
    const result = await User.findAll({
      include: {
        model: Category,
        required: true,
      },
      include: {
        model: Media,
        required: true,
      },
      where: {
        id: userId,
      },
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).send("User wasnt found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getRandomMedia = async (req, res) => {
  try {
    const result = await Media.findAll();
    if (!result) {
      res.status(404).send("Media not found");
    }
    res.status(200).json(randPicker(result));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateMedia = async (req, res) => {
  try {
    const result = await Media.update(req.body, {
      where: {
        id: req.params.mediaId,
      },
    });
    if (!result) {
      res.status(404).send("Media not found");
    }
    res.status(200).send("Media Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteMedia = async (req, res) => {
  try {
    const result = await Media.destroy({
      where: {
        id: req.params.mediaId,
      },
    });
    if (!result) {
      res.status(404).send("Media not found");
    }
    res.status(200).send("Media Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
  getRandomMedia,
  idRandom,
};
