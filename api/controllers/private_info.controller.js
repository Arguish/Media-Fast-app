const Private_Info = require('../models/private_info.model')


async function getAllPrivate_Info(req, res){
 try{
    const private_info= await Private_Info.findAll()
    if(private_info){
        return res.status(200).json(private_info)
    }else{
        return res.status(404).send('Private info not found')
    }
 } catch(error){
    res.status(500).send(error.message)
 }
}

async function getOnePrivate_Info(req,res){
    try {
        const private_info = await Private_Info.findByPk(req.params.userId)
        if (private_info) {
            return res.status(200).json(private_info)
        } else {
            return res.status(404).send('Private info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePrivate_Info (req, res){
    try {
        const private_info = await Private_Info.update(req.body, {
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



async function createPrivate_Info(req, res) {
    try {
        const private_info = await Private_Info.create(req.body)
        return res.status(200).json({ message: 'Private info created', private_info: private_info })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deletePrivate_Info (req,res){
    try {
        const private_info = await Private_Info.destroy({
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




module.exports = { getAllPrivate_Info, getOnePrivate_Info, updatePrivate_Info, createPrivate_Info, deletePrivate_Info }