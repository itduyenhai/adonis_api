'use strict'

class UserController {

    register({ request }) {
        return { Name: 'Nguyen Vu' }
    }

    login({ request }) {

    }
}

module.exports = UserController