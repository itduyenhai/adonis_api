'use strict'
const User = use('App/Models/User')

class UserController {

<<<<<<< HEAD
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
=======
  // Register
  async register({
    request, response
  }) {
    const user = new User()
    const {
      username, email, password
    } = request.all()
    user.uuid = uuidv4()
    user.username = username
    user.email = email
    user.password = password
>>>>>>> 861af445e7fa70696c464b4dcf630867401abfcc

    try {
      await user.save()
      return {
        message: 'Đăng ký tài khoản thành công'
      }
    } catch (error) {
      response.status(403).json({
        message: 'Đăng ký tài khoản thất bại'
      })
    }

<<<<<<< HEAD
    // Login
    async login({ request, response, auth }) {
        const user = new User()
        const { username, password } = request.all()

        try {
            const data = await auth.attempt(username, password, true)
            response.status(201).json(data)
        } catch (error) {
            response.status(403).json({ message: 'Đăng nhập không thành công' })
        }
    }
=======
  }
>>>>>>> 861af445e7fa70696c464b4dcf630867401abfcc

  // Login
  async login({
    request, response, auth
  }) {
    const user = new User()
    const {
      username, password
    } = request.all()

<<<<<<< HEAD
    async profile({ request, response, auth, params }) {

        if (auth.user.uuid !== params.id) {
            response.status(300).json({message: 'Bạn không có quyền xem tài khoản này'})
        }

        const user = await User.find(params.id)
        if (!user) {
            response.status(401).json({message:'Người dùng không tồn tại'})
        } else {
            response.status(200).json(user)
        }

=======
    try {
      const data = await auth.attempt(username, password, true)
      response.status(201).json(data)
    } catch (error) {
      response.status(403).json({
        message: 'Đăng nhập không thành công'
      })
>>>>>>> 861af445e7fa70696c464b4dcf630867401abfcc
    }
  }

  // List Users
  async list({
    request, response
  }) {
    response.status(200).json(await User.all())
  }

  // Profile
  async profile({
    request, params, response
  }) {
    const {
      id
    } = params
    const user = await User.find(id)
    if (!user) {
      response.status(401).json({
        message: 'Người dùng không tồn tại'
      })
    } else {
      response.status(200).json(user)
    }

  }
}

module.exports = UserController
