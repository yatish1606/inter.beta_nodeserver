// const pool = require('../../config/database')
const { connectAndQuery } = require('../../config/db')
const sql = require('mssql')

module.exports = {
    create: async (data, callBack) => {
        const pool = await connectAndQuery()
        const request = new sql.Request(pool)
        request.query(
            "INSERT INTO Users (first_name, last_name, email, password, company, designation, timestamp) VALUES ('" +
                data.first_name +
                "','" +
                data.last_name +
                "','" +
                data.email +
                "','" +
                data.password +
                "','" +
                data.company +
                "','" +
                data.designation +
                "','" +
                Date.now().toString() +
                "')",
            (error, result) => {
                console.log(result, error)
                if (!error) {
                    if (result.rowsAffected != undefined) {
                        callBack(null, data)
                    }
                }
            }
        )
    },

    getUserByUserId: async (id, callBack) => {
        const pool = await connectAndQuery()
        const result = await pool.request().query("SELECT * FROM Users WHERE id = '" + id + "'")
        console.log(result)
        callBack(null, result.recordset)
    },
    getUserByEmail: async (id, callBack) => {
        const pool = await connectAndQuery()
        const result = await pool.request().query("SELECT * FROM Users WHERE email = '" + id + "'")
        console.log(result)
        callBack(null, result.recordset)
    },
    getUsers: async callBack => {
        const pool = await connectAndQuery()
        const result = await pool.request().query(`SELECT * FROM Users`)
        console.log(result)
        callBack(null, result.recordset)
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update registration set firstName=?, lastName=?, email=?, password=?, company=?, designation=? where id = ?`,
            [data.first_name, data.last_name, data.email, data.password, data.company, data.designation, data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(`delete from registration where id = ?`, [data.id], (error, results, fields) => {
            if (error) {
                callBack(error)
            }
            return callBack(null, results[0])
        })
    },
}
