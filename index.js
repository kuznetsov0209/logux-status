var attention = require('./attention')
var confirm = require('./confirm')

module.exports = {
  attention: attention,
  confirm: confirm
}

/**
 * Any object with Sync instance in `sync` property.
 * For example, `logux-client` instance.
 *
 * @typedef {object} Syncable
 * @property {BaseSync} sync The sync instance.
 */
