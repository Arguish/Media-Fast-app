const Media = require("../models/media.model");

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
};
