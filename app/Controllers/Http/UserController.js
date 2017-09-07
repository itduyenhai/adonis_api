'use strict'
const User = use('App/Models/User')
const uuidv4 = use('uuid/v4')

class UserController {

    // Register
    async register({ request, response }) {
        const user = new User()
        const { username, email, password } = request.all()
        user.uuid = uuidv4()
        user.username = username
        user.email = email
        user.password = password

        try {
            await user.save()
            return { message: 'Đăng ký tài khoản thành công' }

        } catch (error) {
            response.status(403).json({ message: 'Đăng ký tài khoản thất bại' })
        }

    }

    // Login
    async login({ request }) {
        return { Name: 'login' }
    }

    async list({ request }) {
        return { Users: 'List users' }
    }

    async profile({ request }) {
        return { profile: 'Profile user' }
    }



}

module.exports = UserController