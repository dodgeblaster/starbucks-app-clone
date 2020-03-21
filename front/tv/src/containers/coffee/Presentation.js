import styled from 'styled-components'
import TvLayout from '../../components/layout/TvLayoutBlack'
import BoardCategory from '../../components/base/BoardCategory'

const S = {}
S.Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 40px;
`

S.Column = styled.div`
    flex: 0 0 280px;
    height: 480px;
    margin: 0 10px;
`

S.LoadingContainer = styled.div`
    height: 562.5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export default props => {
    if (props.loading) {
        return (
            <TvLayout>
                <S.LoadingContainer>
                    <p>Loading...</p>
                </S.LoadingContainer>
            </TvLayout>
        )
    }

    return (
        <TvLayout>
            <S.Container>
                <S.Column>
                    <BoardCategory time={0} category={props.data[0]} />
                    <BoardCategory time={0.3} category={props.data[1]} />
                </S.Column>
                <S.Column>
                    <BoardCategory time={0.1} category={props.data[2]} />
                    <BoardCategory time={0.4} category={props.data[3]} />
                </S.Column>
                <S.Column>
                    <BoardCategory time={0.2} category={props.data[4]} />
                    <BoardCategory time={0.5} category={props.data[5]} />
                </S.Column>
            </S.Container>
        </TvLayout>
    )
}
