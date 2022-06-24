const {Device, DeviceInfo} = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
    async getAll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne({where: {id}, include: [{model: DeviceInfo, as: 'info'}]})
        return res.json(device)
    }

    async create(req, res, next) {
        try {
            let {name, price, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, typeId, img: fileName})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                }))
            }
            return res.json(device)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
        
    }

}

module.exports = new DeviceController()