'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WalletSchema extends Schema {
  up () {
    this.create('wallets', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.bigInteger('balance', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('wallets')
  }
}

module.exports = WalletSchema
