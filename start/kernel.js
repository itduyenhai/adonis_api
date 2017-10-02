'use strict'

const Server = use('Server')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
*/
const globalMiddleware = [
  'Adonis/Middleware/Cors',
  'Adonis/Middleware/BodyParser',
  'Adonis/Middleware/AuthInit',
]

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth'
}

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(['Adonis/Middleware/Static'])
