import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

class MyApp extends App {
    render() {
        const { Component, pageProps, apolloClient } = this.props
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <ApolloHooksProvider client={apolloClient}>
                        <Component {...pageProps} />
                    </ApolloHooksProvider>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withApolloClient(MyApp)
