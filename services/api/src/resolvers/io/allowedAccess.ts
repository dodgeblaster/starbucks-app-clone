import { User } from '../../interfaces'
import { createError } from 'apollo-errors'
import * as aws from 'aws-sdk'
aws.config.update({ region: process.env.AWS_REGION })

const ERROR_MESSAGE = 'The provided credentials are invalid.'

export default async ({ ctx, context, allowed }): Promise<User> => {
    /**
     * Temporarily returning mock user information
     *
     * Option A:
     * In the future, we can get the cognito context information
     * if saving account information and permissions on the cognito option is an option
     *
     * Option B:
     * If we need more flexibility, we can save a member in a member dynamo table
     * and this function will look it up and confirm the member has an account
     * valid for this api call and the correct permissions
     *
     * Option C:
     * We have permissions set on the object this api call is fetching
     * for example, productA has an owners array and readers array, and if
     * this members id is included, they can access that object.
     * This allows us to not have to do permission checks at the api level, but
     * instead at the service level.
     *
     */
    return {
        id: 'mock_1234',
        name: 'John',
        email: 'john@example.com',
        roles: ['superAdmin']
    }
}
