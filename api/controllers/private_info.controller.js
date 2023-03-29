const PrivateInfo = require('../models/private_info.model')


async function getAllPrivateInfo(req, res) {
    try {
        const private_info = await PrivateInfo.findAll()
        if (private_info) {
            return res.status(200).json(private_info)
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getMyPrivateInfo(req, res) {
    try {
        const user = res.locals.privateInfo.userId
        const private_info = await PrivateInfo.findByPk(user)
        if (private_info) {
            return res.status(200).json(private_info)
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getOnePrivateInfo(req, res) {
    try {
        const private_info = await PrivateInfo.findByPk(req.params.userId)
        if (private_info) {
            return res.status(200).json(private_info)
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function updateMyPrivateInfo(req, res) {
    try {
        const user = res.locals.privateInfo.userId
        const private_info = await PrivateInfo.update(req.body, {
            where: {
                id: user,
            },
        })
        if (private_info) {
            return res.status(200).json({ message: 'Private info updated' })
        } else {
            return res.status(404).send('Private info not found')
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updatePrivateInfo(req, res) {
    try {
        const private_info = await PrivateInfo.update(req.body, {
            where: {
                id: req.params.private_infoId,
            },
        })
        if (private_info) {
            return res.status(200).json({ message: 'Private info updated' })
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



async function createPrivateInfo(req, res) {
    try {
        const private_info = await PrivateInfo.create(req.body)
        return res.status(200).json({ message: 'Private info created', private_info: private_info })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteMyPrivateInfo(req, res) {
    try {
        const user = res.locals.privateInfo.userId
        console.log(user)
        const private_info = await PrivateInfo.destroy({
            where: {
                id: user,
            },
        })
        if (private_info) {
            return res.status(200).json('Private info deleted')
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePrivateInfo(req, res) {
    try {
        const private_info = await PrivateInfo.destroy({
            where: {
                id: req.params.private_infoId,
            },
        })
        if (private_info) {
            return res.status(200).json('Private info deleted')
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = { getAllPrivateInfo, getOnePrivateInfo, updatePrivateInfo,
    createPrivateInfo, deletePrivateInfo, getMyPrivateInfo, updateMyPrivateInfo, deleteMyPrivateInfo }