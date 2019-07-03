import styled from 'styled-components'
import TvLayout from '../../components/layout/TvLayoutWhite'
import ProductTile from '../../components/base/ProductTile'
import TweetDisplay from '../../components/base/TweetDisplay'

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

export default props => (
    <TvLayout>
        <S.Title>
            The happiest hour <br />
            of your day
        </S.Title>

        <TweetDisplay tweets={props.tweets} tweet={props.tweet} />

        <S.Container>
            {props.data.map((x, i) => (
                <ProductTile
                    name={x.name}
                    imgUrl={x.imgUrl}
                    highlighted={props.highlighting === i}
                    priceTall={x.price.tall}
                    priceGrande={x.price.grande}
                    priceVenti={x.price.venti}
                />
            ))}
        </S.Container>
    </TvLayout>
)
