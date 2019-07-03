import styled from 'styled-components'

const S = {}
S.Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
`

S.Hr = styled.hr`
    border-width: 5px;
    border-color: white;
    margin: 2px 0 10px;
`

S.TypeHeader = styled.div`
    height: 60px;
    width: 100%;
    background-position: center center;
    background-size: cover;
    margin-bottom: 20px;
`

S.ProductContainer = styled.div`
    display: flex;
    margin-top: 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
`

S.ProductName = styled.p`
    color: #999;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    margin-right: auto;
`

S.ProductPrice = styled.p`
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    margin-right: 10px;
`

S.ProductCal = styled.p`
    color: white;
    text-transform: uppercase;
    margin: 0;
    font-weight: normal;
`

export default props => (
    <div
        style={{
            marginBottom: 40
        }}
    >
        <S.Title>{props.category.name}</S.Title>
        <S.Hr />
        <S.TypeHeader
            style={{
                backgroundImage:
                    'url(' +
                    process.env.ASSETS_URL +
                    props.category.headerUrl +
                    ')',
                backgroundPosition:
                    props.category.headerPosition || 'center center'
            }}
        />

        {props.category.products.map(x => (
            <S.ProductContainer>
                <S.ProductName>{x.name}</S.ProductName>
                <S.ProductPrice>{x.price}</S.ProductPrice>
                <S.ProductCal>{x.calories}</S.ProductCal>
            </S.ProductContainer>
        ))}
    </div>
)
