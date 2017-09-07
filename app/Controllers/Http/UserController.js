'use strict'

class UserController {

    list({ request }) {
        return { Users: 'List users' }
    }

    profile({ request }) {
        return { profile: 'Profile user' }
    }

}

module.exports = UserController