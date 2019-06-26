export default AWS => async (event, data) => {
    const SNS = new AWS.SNS({
        region: process.env.REGION || 'us-east-1'
    })

    const arn = await SNS.createTopic({ Name: event }).promise()

    return SNS.publish({
        Subject: event,
        Message: JSON.stringify(data),
        TopicArn: arn.TopicArn
    }).promise()
}
