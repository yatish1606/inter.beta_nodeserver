const router = require('express').Router()
const {
    createInterview,
    getInterviews,
    getInterviewsByInterviewerId,
    updateInterview,
    getInterviewsById,
    updateJSON,
} = require('./interviews.controller')
router.get('/', getInterviews)
router.get('/:id', getInterviewsById)
router.post('/', createInterview)
router.get('/byInterviewerId/:id', getInterviewsByInterviewerId)
router.patch('/', updateInterview)
router.patch('/updateJson', updateJSON)
// router.get('/:id', getUserByUserId)
// router.get('/getByEmail/:id', getUserByEmail)
// router.post('/login', login)
// router.patch('/', updateUsers)
// router.delete('/', deleteUser)

module.exports = router
