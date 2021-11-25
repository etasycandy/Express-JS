var express = require('express')
var router = express.Router()
var Lop = require('../models/Lop.model')

/* GET home page. */
router.get('/', async (req, res) => {
	res.render('index')
})

/**
 * GET task1
 */
router.get('/lop', async (req, res) => {
	const lop = await Lop.find()
	res.render('lop', { lop })
})

/**
 * POST task1
 */
router.post('/lop', async (req, res) => {
	await Lop.create(req.body)
	res.redirect('/lop')
})

/**
 * Update
 */
router.get('/update', async (req, res) => {
	res.render('update')
})

router.post('/update', async (req, res) => {
	await Lop.findByIdAndUpdate(req.body.id, req.body)
	res.redirect('/lop')
})

/**
 * Delete
 */
router.post('/delete', async (req, res) => {
	await Lop.findByIdAndDelete(req.body.id)
	res.redirect('/lop')
})

module.exports = router
