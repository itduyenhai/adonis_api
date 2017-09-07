'use strict'

class AuthController {
    // Register
    register({ request }) {
        return { Name: 'Nguyen Vu' }
    }

    // Login
    login({ request }) {

    }
}

module.exports = AuthController