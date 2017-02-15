var attention = require('./attention')
var confirm = require('./confirm')
var log = require('./log')

module.exports = {
  attention: attention,
  confirm: confirm,
  log: log
}

/**
 * Any object with Sync instance in `sync` property.
 * For example, `logux-client` instance.
 *
 * @typedef {object} Syncable
 * @property {BaseSync} sync The sync instance.
 */
