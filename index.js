var attention = require('./attention')

module.exports = {
  attention: attention
}

/**
 * Any object with Sync instance in `sync` property.
 * For example, `logux-client` instance.
 *
 * @typedef {object} Syncable
 * @property {BaseSync} sync The sync instance.
 */
