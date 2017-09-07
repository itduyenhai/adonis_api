'use strict'

const Route = use('Route')

Route.get('/', ({ request }) => {
    return { greeting: 'Hello world in JSON' }
})

// Auth
Route
    .group(() => {
        Route.post('register', 'UserController.register')
        Route.post('login', 'UserController.login')
    }).prefix('api/v1')

// User
Route
    .group(() => {
        Route.get('users', 'UserController.list')
        Route.get('user/profile', 'UserController.profile')
    }).prefix('api/v1')