'use strict'
const User = use('App/Models/User')
const uuidv4 = use('uuid/v4')

class UserController {

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

  }

  // Login
  async login({
    request, response, auth
  }) {
    const user = new User()
    const {
      username, password
    } = request.all()

    try {
      const data = await auth.attempt(username, password, true)
      response.status(201).json(data)
    } catch (error) {
      response.status(403).json({
        message: 'Đăng nhập không thành công'
      })
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
