import { createError } from 'apollo-errors'
import * as aws from 'aws-sdk'
aws.config.update({ region: process.env.AWS_REGION })

const createGeneralError = x =>
    createError('jwt', {
        message: x
    })

const getDynamoMemberAccounts = async email => {
    const dynamoDb = new aws.DynamoDB.DocumentClient({
        region: process.env.AWS_REGION
    })
    const params = {
        TableName: `origamai-members-${process.env.STAGE}`,
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1 = :email',
        ExpressionAttributeValues: {
            ':email': email
        }
    }

    try {
        const x = await dynamoDb.query(params).promise()
        const member = x.Items[0]

        const params2 = {
            TableName: `origamai-members-${process.env.STAGE}`,
            KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
            ExpressionAttributeValues: {
                ':pk': member.PK,
                ':sk': 'account'
            }
        }

        const x2 = await dynamoDb.query(params2).promise()
        const accounts = x2.Items

        return {
            ...member,
            accounts
        }
    } catch (e) {
        console.log('ALLOWED ACCESS - FETCH ACCOUNTS ERROR', e)
        return false
    }
}

export default async ({ ctx, context, allowed }) => {
    const data: any = await getDynamoMemberAccounts(ctx.claims.email)

    const makeId = x => {
        if (x.type === 'internal' && x.role === 'superAdmin') {
            return 'internal-superAdmin'
        }

        if (x.type === 'internal' && x.role === 'member') {
            return 'internal-member'
        }

        if (x.type === 'personal') {
            return 'personal'
        }

        return x.targetId
    }

    const accounts = data.accounts.map(x => ({
        id: makeId(x),
        role: x.role,
        accountName: x.accountName,
        type: x.type,
        targetId: x.targetId || x.GSI2
    }))

    if (
        allowed.includes('superAdmin') &&
        accounts.find(a => a.role === 'superAdmin')
    ) {
        return {
            id: data.PK,
            name: data.name,
            email: data.email,
            accounts
        }
    }

    if (
        allowed.includes('orgAdmin') &&
        accounts.find(a => a.role === 'owner' && a.targetId === context)
    ) {
        return {
            id: data.PK,
            name: data.name,
            email: data.email,
            accounts
        }
    }

    if (allowed.includes('all')) {
        return {
            id: data.PK,
            name: data.name,
            email: data.email,
            accounts
        }
    }

    if (
        allowed.includes('orgMember') &&
        accounts.find(a => a.targetId === context)
    ) {
        return {
            id: data.PK,
            name: data.name,
            email: data.email,
            accounts
        }
    }

    if (allowed.includes('all')) {
        return {
            id: data.PK,
            name: data.name,
            email: data.email,
            accounts
        }
    }

    throw new (createGeneralError('The provided credentials are invalid.'))()
}
