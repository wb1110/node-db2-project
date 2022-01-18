const db = require('../../data/db-config')

const getAll = () => {
  db('cars')
}

const getById = (id) => {
  db('cars').where({ id: id })
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
};
