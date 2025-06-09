const express = require('express')
const { body } = require('express-validator')
const { signup, signin } = require('../controllers/authController')
const router = express.Router()

router.post('/signup',
    [
        body('firstName').notEmpty().withMessage("FirstName is required!"),
        body('lastName').notEmpty().withMessage("LastName is required!"),
        body('email').notEmpty().withMessage("Email is required!"),
        body('dob').notEmpty().withMessage("DOB is required!"),
        body('password').isLength({ min: 8 }).withMessage("Password must be atleast 8 characters!")
    ], 
    signup
)

router.post('/signin',
    [
        body('email').notEmpty(),
        body('password').notEmpty()
    ],
    signin
)

module.exports = router