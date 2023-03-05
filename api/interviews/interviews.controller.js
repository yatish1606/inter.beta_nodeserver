const {
    create,
    getInterviews,
    getInterviewsByInterviewerId,
    updateInterview,
    getInterviewsById,
    updateJson,
} = require('./interviews.service')
// const { hashSync, genSaltSync, compareSync } = require('bcrypt')
// const { sign } = require('jsonwebtoken')

module.exports = {
    createInterview: (req, res) => {
        console.log('Hereeeeee', req.body)
        const body = req.body
        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection errror',
                })
            }
            return res.status(201).json({
                success: 1,
                data: results,
            })
        })
    },

    // login: (req, res) => {
    //     const body = req.body
    //     getUserByUserEmail(body.email, (err, results) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         if (!results) {
    //             return res.json({
    //                 success: 0,
    //                 data: 'Invalid email or password',
    //             })
    //         }
    //         const result = compareSync(body.password, results.password)
    //         if (result) {
    //             results.password = undefined
    //             const jsontoken = sign({ result: results }, 'qwe1234', {
    //                 expiresIn: '1h',
    //             })
    //             return res.json({
    //                 success: 1,
    //                 message: 'login successfully',
    //                 token: jsontoken,
    //             })
    //         } else {
    //             return res.json({
    //                 success: 0,
    //                 data: 'Invalid email or password',
    //             })
    //         }
    //     })
    // },
    getInterviewsByInterviewerId: (req, res) => {
        const id = req.params.id
        getInterviewsByInterviewerId(id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not Found',
                })
            }
            return res.status(200).json({
                success: true,
                data: results,
            })
        })
    },
    getInterviewsById: (req, res) => {
        const id = req.params.id
        getInterviewsById(id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not Found',
                })
            }
            return res.status(200).json({
                success: true,
                data: results,
            })
        })
    },
    getUserByEmail: (req, res) => {
        const id = req.params.id
        getUserByEmail(id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not Found',
                })
            }
            return res.status(200).json({
                success: true,
                data: results,
            })
        })
    },
    getInterviews: (req, res) => {
        getInterviews((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.status(200).json({
                success: true,
                data: results,
            })
        })
    },
    updateInterview: (req, res) => {
        console.log('Hereeeeee', req.body)
        const body = req.body
        updateInterview(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection errror',
                })
            }
            return res.status(201).json({
                success: 1,
                data: results,
            })
        })
    },
    updateJSON: (req, res) => {
        console.log('updating json', req.body)
        const body = req.body
        updateJson(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection errror',
                })
            }
            return res.status(200).json({
                success: 1,
                data: results,
            })
        })
    },
}
