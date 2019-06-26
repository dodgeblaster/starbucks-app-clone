import io from '../io'
import setupInfra from './../infra'
import domain from '../domain'

// REQUEST RESPONSE FOR GRAPHQL SERVICE
export const exampleFunction = async (event, context, callback) => {
    const infra = setupInfra(io())
    return await domain(infra).exampleFunction(event)
}

// SNS TRIGGERS
export const exampleSnsTriggeredFunction = async (event, context, callback) => {
    const data = io().input.sns(event)
    const infra = setupInfra(io())
    await domain(infra).exampleSnsTriggeredFunction(data)
    return true
}

// SCHEDULED TRIGGERS
export const checkCompileList = async (event, context, callback) => {
    const infra = setupInfra(io())
    await domain(infra).exampleCronTriggeredFunction()
    return true
}
