'use strict'

const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.uuid('uuid').unique()
      table.string('username', 50).notNullable()
      table.date('birthday', 8)
      table.string('email', 100)
      table.string('phone', 15)
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
