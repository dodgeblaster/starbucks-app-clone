import styled from 'styled-components'

/**
 * TV Ratio is 16:9
 *
 * For now we are hardcoding the size of the tv to:
 * WIDTH: 1000px
 * HEIGHT: 562.5px
 */

const WIDTH = 1000
const HEIGHT = 562.5

const S = {}
S.TvContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    min-height: 100vh;
    flex-direction: column;
`

S.Tv = styled.div`
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background: white;
    position: relative;
    overflow: hidden;
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

export default props => (
    <S.TvContainer>
        <S.Tv>
            <S.BigGreenCircle />
            {props.children}
        </S.Tv>
    </S.TvContainer>
)
