const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/authMiddleware')

router.get('/profile', requireAuth, (req, res) => {
    res.json({ message: "This is a protected route.", user: req.user})
})

module.exports = router