'use strict'

const Model = use('Model')

class User extends Model {
<<<<<<< HEAD
    static boot() {
        super.boot()     

        this.addHook('beforeCreate', 'User.hashPassword')
        this.addHook('beforeCreate', 'User.createUUID')
    }
=======
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  // UUID
  static get primaryKey() {
    return 'uuid'
  }
>>>>>>> 861af445e7fa70696c464b4dcf630867401abfcc

  static get incrementing() {
    return false
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
