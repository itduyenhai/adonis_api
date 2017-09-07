'use strict'

const Route = use('Route')

Route.get('/', ({ request }) => {
    return { greeting: 'Hello world in JSON' }
})

// Auth
Route
    .group(() => {
        Route.get('register', 'UserController.register')
        Route.post('login', 'UserController.login')
    }).prefix('api/v1')