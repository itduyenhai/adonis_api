'use strict'
const User = use('App/Models/User')

class UserController {

    // Register
    async register({ request, response }) {
        const user = new User()
        const { username, email, password } = request.all()
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