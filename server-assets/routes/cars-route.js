const router = require('express').Router()
let Car = require('../models/Car')

router.get('/:index?', (req, res, next) => {
    if (!req.params.index) {
        Car.find({})
            .then(cars => {
                return res.send(cars)
            })
    }
    Car.findById(req.params.id)
        .then(cars => {
            return res.send(cars)
        })
})



router.post('/', (req, res, next) => {
let newCar = req.body
Car.create(newCar)
.then(car => {
    res.send(car)
})
.catch(err => {
    res.status(400).send(err)
})
})

module.exports = router