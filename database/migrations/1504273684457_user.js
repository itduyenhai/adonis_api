'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
    up() {
        this.create('users', table => {
            table.uuid('uuid').unique()
            table.string('cmnd', 12).notNullable().unique()
            table.string('password', 60).notNullable()
            table.boolean('active').default(false)
            table.timestamps()
        })
    }

    down() {
        this.drop('users')
    }
}

module.exports = UserSchema
