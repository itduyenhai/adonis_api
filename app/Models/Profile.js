'use strict'

const Model = use('Model')

class Profile extends Model {
  static boot() {
    super.boot()
  }

  // UUID
  static get primaryKey() {
    return 'uuid'
  }

  static get incrementing() {
    return false
  }
}

module.exports = Profile
