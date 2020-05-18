const colors = require('colors')
const Bootcamp = require('../models/bootcamp')
exports.getbootcamps = async(req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            success: true,
            message: "Bootcamp Found",
            data: bootcamps
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Data not found",
        })
    }
}
exports.getbootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        res.status(200).json({
            success: true,
            message: "data found succesfully",
            data: bootcamp
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            message: "not  found"
        })
    }
}
exports.createbootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            message: "Bootcamp created and saved to db",
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "An error raised"
        })
    }; {

    }

}
exports.updatebootcamps = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!bootcamp) {
            res.status(201).json({
                success: false,
                message: "not a user"
            })
        }
        res.status(201).json({
            success: true,
            message: "Bootcamp created and saved to db",
            data: bootcamp
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            message: "An error raised"
        })
    }

}
exports.deletebootcamps = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Bootcamp deleted and removed from db",
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "An error raised"
        })
    }

}