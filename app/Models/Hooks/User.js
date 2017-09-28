'use strict'

const Hash = use('Hash')
const uuidv4 = use('uuid/v4')

const UserHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async (userInstance) => {
  if (userInstance.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}

UserHook.createUUID = async (userInstance) => {
  if (userInstance.uuid) {
    userInstance.uuid = uuidv4()
  }
}
