'use strict'

const Hash = use('Hash')
const uuidv4 = use('uuid/v4')

const UserHook = module.exports = {}

UserHook.hashPassword = async (userInstance) => {
  if (userInstance.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}

UserHook.createUUID = async (userInstance) => {
    userInstance.uuid = await uuidv4()
}
