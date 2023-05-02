const Media = require("../models/media.model");
const randPicker = require("random-array-picker");
const Category = require("../models/category.model");
const Platform = require('../models/platform.model')
const createMedia = async (req, res) => {
  try {
    const media = await Media.create(req.body);
    const category = await Category.findOne({
      where: {
        category_name: req.body.category
      }
    })
    const platform = await Platform.findOne({
      where: {
        name: req.body.platform
      }
    })
    await media.addPlatform(platform)
    await media.addCategory(category)
    return res.status(200).json({
      message: "POST OK ^,_,^",
      Media: media,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createManyMedia = async (req, res) => {
  try {
    const media = await req.body
    media.forEach(async (el) => {
      const row = await Media.create(el)
      const category = await Category.findOne({
        where: {
          category_name: el.category
        }
      })
      const platform = await Platform.findOne({
        where: {
          name: el.platform
        }
      })

      await row.addPlatform(platform)
      await row.addCategory(category)
    })


    return res.status(200).json({
      message: "POST OK ^,_,^",
      Media: media,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}


const getAllMedia = async (req, res) => {
  try {
    const result = await Media.findAll(
      { include: [Platform, Category] }
    );
    console.log('HERE =>>>> ',result[1].dataValues)
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
  createManyMedia
};
