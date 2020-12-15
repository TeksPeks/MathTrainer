const {Router} = require('express')
const User = require('../models/users')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const router = Router()

router.post('/register',
[
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum 6 characters').isLength({min: 6})
],
async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty) {
            return res.status(400).json({
                errors: errors.array,
                message: 'Invalid registration info'
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            res.status(400).json({ message: 'Such user already exists' })
        }

        const HashedPassword = await bcrypt.hash(password, 12)

        const user = new User({ email, password: HashedPassword })

        await user.save()

        res.status(201).json({ message: 'User is succesfully created' })

        
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' })
    }
})

router.post('/login',
[
    check('email', 'Enter correct email adress').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
],
async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty) {
            return res.status(400).json({
                errors: errors.array,
                message: 'Invalid registration info'
            })
        }

        const { email, password } = req.body

        const user = User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User is not found'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Password doesn't match" })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' })
    }
})


module.exports = router