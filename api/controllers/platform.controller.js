const Platform = require('../models/platform.model')

const getPlatforms = async (req, res) => {
  try {
    const result = await Platform.findAll()
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(400).send('There are not platforms.')
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const getOnePlatform = async (req, res) => {
  try {
    const result = await Platform.findByPk(req.params.platformId)
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(400).send('Platform wasnt found')
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const updatePlatform = async (req, res) => {
  try {
    const [updated] = await Platform.update(req.body, {
      where: {
        id: req.params.platformId
      }
    })
    if (updated) {
      res.status(200).json({ message: 'Platform updated' })
    } else {
      res.status(400).send('Platform wasnt found')
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const createPlatform = async (req, res) => {
  try {
    const newEntry = await Platform.create(req.body)
    return res.status(200).json({ message: 'Platform created!', platform: newEntry })
  } catch (err) {
    return res.status(500).send(err)
  }
}

const deletePlatform = async (req, res) => {
  try {
    const deleted = await Platform.destroy({
      where: {
        id: req.params.platformId
      }
    })
    return res.status(200).json({ message: 'Platform deleted.' })
  } catch (err) {
    return res.status(500).send(err)
  }
}


module.exports = { getPlatforms, getOnePlatform, updatePlatform, createPlatform, deletePlatform }