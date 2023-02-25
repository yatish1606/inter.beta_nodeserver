const sql = require('mssql')

const config = {
    user: 'CloudSA20e9b3a2',
    password: 'yatya@persi1606',
    server: 'interbeta.database.windows.net',
    port: 1433,
    database: 'inter.beta',
    connectionTimeout: 3000,
    parseJSON: true,
    options: {
        encrypt: true,
        enableArithAbort: true,
    },
    pool: {
        min: 0,
        idleTimeoutMillis: 3000,
    },
}

// console.log('Starting node server...')
// connectAndQuery()

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config)

        console.log('Pool Connection established')
        // console.log(poolConnection)
        // var resultSet = await poolConnection.request().query(`SELECT * FROM Users`)

        // console.log(`${resultSet.recordset.length} rows returned.`, resultSet)

        // poolConnection.close()
        return poolConnection
    } catch (err) {
        console.log('Error occured')
        console.error(err.message)
    }
}

module.exports = {
    connectAndQuery,
}
