require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signup = async (req, res) => {
    const { firstName, lastName, dob, email, password } = req.body
    
    try {
        const existing = await User.findOne({ email })
        if (existing) return res.status(400).json({ message: "User Already Exists!" })

        const hashed = await bcrypt.hash(password, 10)
        const user = await User.create({ firstName, lastName, dob, email, password: hashed })

        res.status(201).json({ message: "User Registered Successfully!" })
    } catch (err) {
        console.error("Signup Error:", err)
        res.status(500).json({ message: "Internal Server Error!" })
    }
}

exports.signin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid Credentials!" })

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(401).json({ message: "Invalid Credentials!" })

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.json({ message: "Logged In Successfully!", token, user: {
            id: user._id,
            email: user.email,
            name: user.firstName + " " + user.lastName 
        } })
    } catch (err) {
        console.error("Signin Error:", err);
        res.status(500).json({ message: "Internal Server Error!" })
    }
}