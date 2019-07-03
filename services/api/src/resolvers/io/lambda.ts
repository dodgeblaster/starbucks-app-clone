const AWS = require('aws-sdk')
AWS.config.region = process.env.AWS_REGION

export default (name, payload) => {
    const Lambda = new AWS.Lambda({ region: process.env.AWS_REGION })
    const params = {
        FunctionName: name,
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(payload),
        LogType: 'None'
    }
    return new Promise((resolve, reject) => {
        Lambda.invoke(params, (err, data) => {
            if (err) {
                return resolve({
                    error: err
                })
            }

            const payload = JSON.parse(data.Payload)

            if (payload.errorMessage) {
                return resolve({
                    error: payload.errorMessage
                })
            }

            return resolve(payload)
        })
    })
}
