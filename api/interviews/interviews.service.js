// const pool = require('../../config/database')
const { connectAndQuery } = require('../../config/db')
const sql = require('mssql')

module.exports = {
    create: async (data, callBack) => {
        const pool = await connectAndQuery()
        const request = new sql.Request(pool)
        request.query(
            "INSERT INTO Interviews (name, interviewer_id, candidate_name,candidate_email, timestamp, jsonTemplate, status) VALUES ('" +
                data.name +
                "','" +
                data.interviewerId +
                "','" +
                data.candidateName +
                "','" +
                data.candidateEmail +
                "','" +
                Date.now().toString() +
                "','" +
                data.jsonTemplate +
                "','" +
                data.status +
                "')",
            (error, result) => {
                console.log(result, error)
                if (result) {
                    if (result.rowsAffected != null) {
                        callBack(null, null)
                    }
                }
            }
        )
    },
    updateInterview: async (data, callBack) => {
        const pool = await connectAndQuery()
        console.log(data)
        const request = new sql.Request(pool)
        request.query(
            "UPDATE interviews SET status = '" +
                data.status +
                "', jsonTemplate = '" +
                data.jsonTemplate +
                "' WHERE id = '" +
                data.id +
                "'",
            (error, result) => {
                console.log(result, error)
                if (result) {
                    if (result.rowsAffected != null) {
                        callBack(null, data)
                    }
                }
            }
        )
    },
    updateJson: async (data, callBack) => {
        const pool = await connectAndQuery()
        const request = new sql.Request(pool)
        request.query(
            "UPDATE interviews SET status = 'COMPLETED', jsonTemplate = '" +
                data.jsonTemplate +
                "' WHERE id = '" +
                data.room_id +
                "'",
            (error, result) => {
                console.log(result, error)
                if (result) {
                    if (result.rowsAffected != null) {
                        callBack(null, data)
                    }
                }
            }
        )
    },
    getInterviewsByInterviewerId: async (id, callBack) => {
        const pool = await connectAndQuery()
        const result = await pool
            .request()
            .query(
                "SELECT id, name, interviewer_id as interviewerId, candidate_name as candidateName, candidate_email as candidateEmail, timestamp, jsonTemplate, status FROM Interviews WHERE interviewer_id = '" +
                    id +
                    "'"
            )
        console.log(result)
        callBack(null, result.recordset)
    },
    getInterviewsById: async (id, callBack) => {
        const pool = await connectAndQuery()
        const result = await pool
            .request()
            .query(
                "SELECT id, name, interviewer_id as interviewerId, candidate_name as candidateName, candidate_email as candidateEmail, timestamp, jsonTemplate, status FROM Interviews WHERE id = '" +
                    id +
                    "'"
            )
        console.log(result)
        callBack(null, result.recordset)
    },
    // getUserByEmail: async (id, callBack) => {
    //     const pool = await connectAndQuery()
    //     const result = await pool.request().query("SELECT * FROM Users WHERE email = '" + id + "'")
    //     console.log(result)
    //     callBack(null, result.recordset)
    // },
    getInterviews: async callBack => {
        const pool = await connectAndQuery()
        const result = await pool.request().query(`SELECT * FROM Interviews`)
        console.log(result)
        callBack(null, result.recordset)
    },
    // updateUser: (data, callBack) => {
    //     pool.query(
    //         `update registration set firstName=?, lastName=?, email=?, password=?, company=?, designation=? where id = ?`,
    //         [data.first_name, data.last_name, data.email, data.password, data.company, data.designation, data.id],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error)
    //             }
    //             return callBack(null, results[0])
    //         }
    //     )
    // },
    // deleteUser: (data, callBack) => {
    //     pool.query(`delete from registration where id = ?`, [data.id], (error, results, fields) => {
    //         if (error) {
    //             callBack(error)
    //         }
    //         return callBack(null, results[0])
    //     })
    // },
}
