const { query } = require('express')
const Product = require('../models/product')

const getAllProductsStatic = async (request, response) => {
  const products = await Product.find({ featured: true })
  response.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (request, response) => {
  const { featured, company } = request.query
  const queryObject = {}
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company
  }
  const products = await Product.find(queryObject)
  response.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
