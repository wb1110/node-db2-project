// DO YOUR MAGIC
const Cars = require('./cars-model')
const express = require('express')
const mw = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const allCars = await Cars.getAll()
    res.json(allCars)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', mw.checkCarId, async (req, res, next) => {
  try {
    res.json(req.car)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const allCars = await Cars.getAll()
    // res.json(allCars)
    res.send({ message: 'connected post!' })
  } catch (err) {
    next(err)
  }
})


module.exports = router