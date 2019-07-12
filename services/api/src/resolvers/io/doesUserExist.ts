import * as aws from 'aws-sdk'
aws.config.update({ region: process.env.AWS_REGION })

const MEMBER_TABLE = `members-${process.env.STAGE}`

export default async (email: String): Promise<Boolean> => {
    const dynamoDb = new aws.DynamoDB.DocumentClient({
        region: process.env.AWS_REGION
    })
    const params = {
        TableName: MEMBER_TABLE,
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1 = :email',
        ExpressionAttributeValues: {
            ':email': email
        }
    }

    const x = await dynamoDb.query(params).promise()
    return x.Items.length > 0 ? true : false
}
