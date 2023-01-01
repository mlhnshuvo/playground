const router = require('express').Router()
const Authentication = require('./middleware/authenticate')
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
} = require('./controllers')

router.get('/', Authentication, getAllContact)
router.get('/:id', getSingleContact)
router.post('/', createContact)
router.delete('/delete/:id', deleteContact)
router.put('/:id', updateContact)

module.exports = router