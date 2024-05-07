const express = require('express');
const gradesController = require('./controllers/gradesControllers');
const gradesMiddleware = require('./middlewares/gradesMiddlewares')
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Olá Gui'))

router.get('/grades', gradesController.getAll)
router.post('/grades', gradesMiddleware.validateBody, gradesController.createGrade)
router.delete('/grades/:id', gradesController.deleteGrade)
router.put('/grades/:id', gradesController?.updateGrade)

module.exports = router;
