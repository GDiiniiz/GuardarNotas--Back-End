const { response } = require('express')
const gradesModel = require('../models/gradesModel')

const getAll = async (_request, response) => {
  const grades = await gradesModel.getAll()
  return response.status(200).json(grades)
}

const createGrade = async (request, response) => {
  const createdGrade = await gradesModel.createGrade(request.body)
  return response.status(201).json(createdGrade)
}

const deleteGrade = async (request, response) => {
  const { id } = request.params
  await gradesModel.deleteGrade(id)
  return response.status(204).json(gradesModel)
}

const updateGrade = async (request, response) => {
  const { id } = request.params
  await gradesModel.updateGrade(id, request.body)
  return response.status(204).json()
}


module.exports = {
  getAll,
  createGrade,
  deleteGrade,
  updateGrade
}