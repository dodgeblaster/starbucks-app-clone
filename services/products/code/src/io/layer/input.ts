const httpInput = event => {
    return JSON.parse(event.body)
}

const lambdaInput = event => {
    return event
}

const snsInput = e => {
    const snsMessage = e.Records[0].Sns
    const data = JSON.parse(snsMessage.Message)
    return data
}

const dynamoStreamInput = event => {
    return event.Records[0].dynamodb.NewImage
}

const deadLetterQueueInput = x => {
    const data = snsInput(x)
    const errorFunctionName = data.Records[0].EventSubscriptionArn.split(':')[5]
    const errorData = snsInput(x)

    return {
        data: errorData,
        functionName: errorFunctionName
    }
}

export default {
    http: httpInput,
    lambda: lambdaInput,
    sns: snsInput,
    dynamoStream: dynamoStreamInput,
    deadLetterQueue: deadLetterQueueInput
}
