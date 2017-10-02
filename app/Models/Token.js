'use strict'

const Model = use('Model')

class Token extends Model {

  // UUID
  static get primaryKey() {
    return 'uuid'
  }
  static get incrementing() {
    return false
  }

  user() {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Token
