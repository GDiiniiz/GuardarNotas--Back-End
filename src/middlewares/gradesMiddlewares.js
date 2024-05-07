const validateBody = (request, response, next) => {
  const { body } = request

  if (body.grade === undefined){
        return response.status(400).json({mensagem: 'The field Grade is required'})
  }
  if ( body.grade === ''){
       return response.status(400).json({mensagem: 'The cannot be empty'})
  }
    next()

}
module.exports = {
  validateBody
}