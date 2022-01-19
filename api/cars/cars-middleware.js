const Cars = require('./cars-model')
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const [carId] = await Cars.getById(req.params.id)
  if (!carId || carId === 0) {
    res.status(404).json({ message: `car with id ${req.params.id} is not found` })
  } else {
    req.car = carId
    next()
  }
}

const checkCarPayload = (req, res, next) => {
    console.log(req.body.vin)
    if (!req.body.vin) return
      next({
        status: 400,
        message: `vin is missing`,
      })
    if (!req.body.make) return
    next({
      status: 400,
      message: `make is missing`,
    })
    if (!req.body.model) return
    next({
      status: 400,
      message: `model is missing`,
    })
    if (!req.body.mileage) return
    next({
      status: 400,
      message: `mileage is missing`,
    })
    next()
  }


const checkVinNumberValid = (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next()
  } else {
    next({ 
      status: 400, 
      message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}