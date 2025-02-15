const router = require('express').Router()
const {getPlaces,
   getCreatePlace,
   postCreatePlace,
   getOnePlace, 
   postEditPlace, 
   getEditPlace, 
   getDeletePlace} = require('../controllers/index.controller')


/* Crud */
router.get('/places/create',getCreatePlace)
router.post('/places/create',postCreatePlace)
// el de uno solo // cRud
router.get('/', getPlaces)
router.get('/places/:id', getOnePlace)

//* crUd *
router.get('/places/:id/edit', getEditPlace)
router.post('/places/:id/edit',postEditPlace)
//cruD*
router.get('/places/:id/delete',getDeletePlace)

module.exports = router;
