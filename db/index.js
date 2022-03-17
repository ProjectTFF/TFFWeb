const { Client } = require('pg')
const client = new Client(
    {
        user: 'ClownFish',
        host: 'db',
        database: 'tffgodb',
        password: 'ClownMan',
        port: 5433,
    }
)

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  },
}