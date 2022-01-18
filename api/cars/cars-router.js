// DO YOUR MAGIC
const Cars = require('./cars-model')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const allCars = await Cars.getAll()
  try {
    res.json(allCars)
  } catch (err) {
    next(err)
  }
})


module.exports = router