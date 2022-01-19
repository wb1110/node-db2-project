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

router.post(
  '/', 
  mw.checkCarPayload, 
  mw.checkVinNumberValid, 
  mw.checkVinNumberUnique, 
  async (req, res, next) => {
    try {
      const car = await Cars.create(req.body)
      res.json(car)
    } catch (err) {
      next(err)
    }
})


module.exports = router