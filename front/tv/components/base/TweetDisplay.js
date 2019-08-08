import styled, { keyframes } from 'styled-components'
import TwitterIcon from '../icons/TwitterSvg'

const animateIn = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
   transform: translateY(0px);
    opacity: 1;
  }
`

const S = {}
S.TweetContainer = styled.div`
    position: absolute;
    top: 40px;
    left: 72px;
    width: 520px;
    display: flex;
    align-items: flex-start;
    height: 90px;
`

S.TweetContent = styled.p`
    color: #018861;
    font-weight: 400;
    animation: ${animateIn} 0.5s ease-in-out;
`
S.IconWrapper = styled.div`
    height: 40px;
    width: 40px;
    flex: 0 0 40px;
    overflow: hidden;
    display: inline-block;
    margin-top: -20px;
    margin-top: 0px;
    margin-right: 10px;
`

export default props => (
    <S.TweetContainer>
        <S.IconWrapper>
            <TwitterIcon />
        </S.IconWrapper>

        <S.TweetContent>
            <strong>{props.tweet.hashtags.map(x => x + ' ')}</strong> <br />
            {props.tweet.content}
        </S.TweetContent>
    </S.TweetContainer>
)
