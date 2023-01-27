import { body, validationResult } from 'express-validator';
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register=async(req, res)=>{
	body('username').isEmail(),
  body('password').isLength({ min: 5 }),
	body('email').isEmail(),
	body('tracks').optional().isArray(),
  (req, res) => {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

	}
	try {
		const { username, password, email } = req.body
		const isUsed = await User.findOne({ username })

		if (isUsed) {
				return res.json({
						message: 'Данное имя уже занято.',
				})
		}

		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)

		const newUser = new User({
				username,
				password: hash,
				email
		})

		const token = jwt.sign(
				{
						id: newUser._id,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '30d' },
		)

		await newUser.save()

		res.json({
				newUser,
				// token,
				message: 'Регистрация прошла успешно.',
		})
} catch (error) {
		res.json({ message: 'Ошибка при создании пользователя.' })
	
}
}


export const login = async (req, res)=>{
	try{
		const { username, password } = req.body
		const user = await User.findOne({username})
		if(!user){
			return res.json({
				message:"Такого пользователя не существует"
			})
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password)
		if(!isPasswordCorrect){
			return res.json({
				message:"Неверный пароль"
			})
		}

		const token = jwt.sign(
			{
			id:user._id,
		},
		process.env.JWT_SECRET,
		{expiresIn:'30d'},
		)
		res.json({
			token, 
			user,
			message:"Вы вошли в систему"

		})
	}catch(e){
		res.json({ message: 'Ошибка при авторизации.' })
	}
}

export const getMe = async (req, res)=>{
	try {
		const user = await User.findById(req.userId)

		if (!user) {
				return res.json({
						message: 'Такого пользователя не существует.',
				})
		}

		const token = jwt.sign(
				{
						id: user._id,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '30d' },
		)

		res.json({
				user,
				token,
		})
} catch (error) {
		res.json({ message: 'Нет доступа.' })
}
}