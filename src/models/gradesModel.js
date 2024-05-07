const connection = require('./connection')

const getAll = async () => {
  const [grade] = await connection.execute('SELECT * FROM grades')
  return grade
}

const createGrade = async (grades) => {
  const { grade } = grades
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO grades (grade, created_At) VALUES (?, ?)';

  const [createdGrade] = await connection.execute(query, [grade, dateUTC]);

  return {insertId: createdGrade.insertId};

}

const deleteGrade = async (id) => {
  const [removedGrade] = await connection.execute('DELETE FROM grades WHERE id = ?', [id])
  return removedGrade
}

const updateGrade = async (id, grades) =>{
  const { grade } =grades
  const query = 'UPDATE grades SET grade = ? WHERE id = ?'
  console.log(query)
  const updatedGrade = await connection.execute(query, [grade, id])
  return updatedGrade
}

module.exports = {
  getAll,
  createGrade,
  deleteGrade,
  updateGrade
}