// const { Client } = require('pg')
import pkg from 'pg'
const { Client } = pkg

export const db = new Client({
    user: 'xxx',
    host: 'xxx',
    database: 'xxx',
    password: 'xxx',
    port: xxx,
})

db.connect()