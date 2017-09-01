'use strict'

const Model = use('Model')

class User extends Model {
    static boot() {
        super.boot()

        /**
         * A hook to bash the user password before saving
         * it to the database.
         *
         * Look at `app/Models/Hooks/User.js` file to
         * check the hashPassword method
         */
        this.addHook('beforeCreate', 'User.hashPassword')
    }

    // UUID
    static get primaryKey() {
        return 'uuid'
    }

    static get incrementing() {
        return false
    }

    // tokens
    tokens() {
        return this.hasMany('App/Model/Token')
    }

    /**
     * A relationship on tokens is required for auth to
     * work. Since features like `refreshTokens` or
     * `rememberToken` will be saved inside the
     * tokens table.
     *
     * @method tokens
     *
     * @return {Object}
     */
    tokens() {
        return this.hasMany('App/Models/Token')
    }
}

module.exports = User