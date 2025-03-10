const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addToCart, getCart } = require('../controllers/cartController');

const router = express.Router()

router.post("/add",authMiddleware,addToCart)
router.get("/",authMiddleware,getCart)
//router.post("/remove")
module.exports = router;












