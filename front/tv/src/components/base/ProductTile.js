import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const imageSize = 140

const S = {}
S.Container = styled.div`
    opacity: 0;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-name: ${fadeIn};
    animation-timing-function: linear;
    height: 280px;
    width: 200px;
    background: #018861;
    border-radius: 10px;
    margin: 10px;
    position: relative;
    margin-top: ${imageSize / 2}px;
    padding: ${imageSize / 2 + 20}px 20px 40px 20px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(rgba(0, 124, 89, 0), rgba(0, 124, 89, 1) 60%),
        url('/static/selected-background.svg');
`

S.Title = styled.h2`
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;
    line-height: 1;
`

S.PriceEntry = styled.div`
    display: flex;
    justify-content: space-between;
`

S.Size = styled.p`
    color: #00412e;
    margin: 0;
    font-family: 'Heebo', sans-serif;
`

S.Price = styled.p`
    color: white;
    font-weight: bold;
    margin: 0;
`

S.ImageContainer = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: -${imageSize / 2}px;
    display: flex;
    justify-content: center;
`

S.Image = styled.div`
    height: ${imageSize}px;
    width: ${imageSize}px;
    border-radius: ${imageSize / 2}px;
    background: white;
    background-size: cover;
    background-position: center center;
`

const convertNumberToPrice = x =>
    '$' +
    x
        .toString()
        .split('')
        .map((x, i) => {
            if (i == 0) {
                return x + '.'
            }

            return x
        })
        .join('')

const shadow = {
    small: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    raised: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`
}

export default props => (
    <S.Container
        style={{
            transform: props.highlighted ? 'scale(1.1)' : 'scale(1)',
            animationDelay: props.time ? props.time + 's' : '0s',
            boxShadow: props.highlighted ? shadow.raised : shadow.small
        }}
    >
        <S.ImageContainer>
            <S.Image
                style={{
                    backgroundImage:
                        'url(' + process.env.ASSETS_URL + props.imgUrl + ')'
                }}
            />
        </S.ImageContainer>
        <S.Title>{props.name}</S.Title>
        <div>
            <S.PriceEntry>
                <S.Size>Tall</S.Size>
                <S.Price>{convertNumberToPrice(props.priceTall)}</S.Price>
            </S.PriceEntry>
            <S.PriceEntry>
                <S.Size>Grande</S.Size>
                <S.Price>{convertNumberToPrice(props.priceGrande)}</S.Price>
            </S.PriceEntry>
            <S.PriceEntry>
                <S.Size>Venti</S.Size>
                <S.Price>{convertNumberToPrice(props.priceVenti)}</S.Price>
            </S.PriceEntry>
        </div>
    </S.Container>
)
