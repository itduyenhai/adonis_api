'use strict'

const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  // UUID
  static get primaryKey() {
    return 'uuid'
  }

  static get incrementing() {
    return false
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
