import styled from 'styled-components'
import TvLayout from '../../layout/TvLayoutWhite'
import ProductTile from '../../base/ProductTile'
import TweetDisplay from '../../base/TweetDisplay'

const S = {}
S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 562.5px;
    padding-bottom: 40px;
`

S.BigGreenCircle = styled.div`
    background: #e5f3ef;
    height: 600px;
    width: 600px;
    border-radius: 300px;
    position: absolute;
    top: -100px;
    right: 100px;
    background-image: url('https://www.starbucks.ca/static/images/global/logo.svg');
    background-size: cover;
    opacity: 0.1;
`

S.Title = styled.h1`
    color: #018861;
    font-size: 35px;
    font-weight: 900;
    position: absolute;
    letter-spacing: -1;
    line-height: 0.9;
    top: 40px;
    right: 72px;
    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;
    text-align: right;
`

S.LoadingContainer = styled.div`
    height: 562.5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const selectRandomTweet = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const Content = props => {
    return props.data.map((x, i) => (
        <ProductTile
            key={x.id}
            time={i * 0.1}
            name={x.name}
            imgUrl={x.imgUrl}
            highlighted={props.highlighting === i}
            priceTall={x.price.tall}
            priceGrande={x.price.grande}
            priceVenti={x.price.venti}
        />
    ))
}

const Tweets = props => {
    const tweets = props.data[props.highlighting].tweets
    return <TweetDisplay tweet={selectRandomTweet(tweets)} />
}

export default props => {
    if (props.loading) {
        return (
            <TvLayout>
                <S.Title>
                    The happiest hour <br />
                    of the day
                </S.Title>
                <S.LoadingContainer>
                    <p>Loading...</p>
                </S.LoadingContainer>
            </TvLayout>
        )
    }

    return (
        <TvLayout>
            <S.Title>
                The happiest hour <br />
                of the day
            </S.Title>

            <Tweets {...props} />
            <S.Container>
                <Content {...props} />
            </S.Container>
        </TvLayout>
    )
}
