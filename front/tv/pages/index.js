import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const PREFETCH = gql`
    query allProducts {
        allFeaturedProducts {
            id
            name
            price {
                tall
                grande
                venti
            }
            imgUrl
            type
            description
        }

        allFeaturedTweets {
            about
            hashtags
            content
        }

        allGeneralTweets {
            hashtags
            content
        }
    }
`

const S = {}
S.Title = styled.h1`
    color: white;
    font-size: 35px;
    font-weight: 900;

    letter-spacing: -1;
    line-height: 0.9;
    margin-bottom: 40px;

    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;
`

S.Text = styled.p`
    color: white;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;

    a {
        background: black;
        padding: 5px 25px;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        transition: 0.1s;
        &:hover {
            background: #016841;
        }
    }
`

S.TvOptionContainer = styled.div`
    display: flex;
    margin-top: 40px;
    a {
        color: white;
        text-align: center;
        display: inline-block;
    }

    p {
        margin-top: 10px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

S.TvOption = styled.img`
    height: 200px;
    flex: 0 0 360px;
    margin: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    transition: 0.2s;
    &:hover {
        transform: scale(1.02);
    }
`

S.Screen = styled.div`
    z-index: -2;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(#018861, #006546);
    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;
`

S.Wrapper = styled.div`
    max-width: 800px;
    width: 90%;
    position: relative;
`

const LOGO_URL = 'https://www.starbucks.ca/static/images/global/logo.svg'
S.BigGreenCircle = styled.div`
    z-index: 0;
    background: #e5f3ef;
    height: 600px;
    width: 600px;
    border-radius: 300px;
    position: absolute;
    top: -200px;
    left: 400px;
    background-image: url(${LOGO_URL});
    background-size: cover;
    opacity: 0.1;
    @media (max-width: 800px) {
        display: none;
    }
`

export default () => {
    const x = useQuery(PREFETCH)

    return (
        <S.Screen>
            <S.Wrapper>
                <S.BigGreenCircle />
            </S.Wrapper>
            <S.Wrapper>
                <S.Title>Starbucks TV Screens</S.Title>
                <S.Text>
                    Hello! This is an example project demonstrating how to use{' '}
                    <strong>React JS</strong>, <strong>GraphQL</strong>, and the{' '}
                    <strong>Serverless Framework</strong> together to build
                    multiple apps for a single client. This page is a list of TV
                    screens a coffee shop like starbucks might want at the front
                    of their stores. They are sized for a 16:9 ratio. The first
                    screen is for highlighted products, and the second is a
                    coffee menu.
                </S.Text>

                <S.Text>
                    Eventually this project will have seperate frontend clients
                    for store owners, customers, baristas, and shipping. They
                    will all connect to one GraphQL BFF (backend for frontends),
                    which will talk to serverless microservices.
                </S.Text>

                <S.Text>
                    Click on the tv screens below to see them. All the code is
                    on{' '}
                    <Link href="https://github.com/dodgeblaster/starbucks-app-clone">
                        <a>Github</a>
                    </Link>
                </S.Text>

                <S.TvOptionContainer>
                    <Link href="/highlighted">
                        <a>
                            <S.TvOption src="/static/highlighted.png" />
                            <p>Highlighted TV</p>
                        </a>
                    </Link>

                    <Link href="/coffee">
                        <a>
                            <S.TvOption src="/static/coffee-menu.png" />
                            <p>Coffee Menu TV</p>
                        </a>
                    </Link>
                </S.TvOptionContainer>
            </S.Wrapper>
        </S.Screen>
    )
}
