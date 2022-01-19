const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where({ id: id })
}

const create = (newCar) => {
  return db('cars').insert({ 
    vin: newCar.vin,
    make: newCar.make,
    model: newCar.model,
    mileage: newCar.mileage,
    title: newCar.title,
    transmission:  newCar.transmission
  })
}

module.exports = {
  getAll,
  getById,
  create
};
