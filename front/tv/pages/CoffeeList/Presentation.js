import styled from 'styled-components'
import TvLayout from '../../components/layout/TvLayoutBlack'
import BoardCategory from '../../components/base/BoardCategory'

const mockData = [
    {
        name: 'Coffee',
        headerUrl: 'brewed-coffee/coffee.jpg',
        products: [
            {
                name: 'Dark Coffee',
                price: '$2.00',
                calories: '270 cal'
            },
            {
                name: 'Blonde Coffee',
                price: '$2.00',
                calories: '270 cal'
            },
            {
                name: 'Pike Place',
                price: '$2.00',
                calories: '270 cal'
            },
            {
                name: 'Caffe Misto',
                price: '$2.00',
                calories: '270 cal'
            }
        ]
    },
    {
        name: 'Espresso',
        headerUrl: 'espresso-drinks/latte/flat-white.jpg',
        products: [
            {
                name: 'Flat White',
                price: '$3.00',
                calories: '270 cal'
            },
            {
                name: 'Caffe Latte',
                price: '$3.20',
                calories: '270 cal'
            },
            {
                name: 'Cappucino',
                price: '$3.20',
                calories: '270 cal'
            },
            {
                name: 'Caffe Americano',
                price: '$3.00',
                calories: '270 cal'
            }
        ]
    },
    {
        name: 'Frappacino',
        headerUrl:
            'frappucino-blended-beverages/cream-frappucino/chai-cream-frappucino.jpg',
        headerPosition: 'center 20%',
        products: [
            {
                name: 'Caramel Frappucino',
                price: '$5.00',
                calories: '270 cal'
            },

            {
                name: 'Java Chip Frappucino',
                price: '$5.10',
                calories: '270 cal'
            },

            {
                name: 'Chai Cream Frappucino',
                price: '$5.00',
                calories: '270 cal'
            },
            {
                name: 'Espresso Light Frappucino',
                price: '$5.00',
                calories: '270 cal'
            }
        ]
    },
    {
        name: 'Iced Coffee',
        headerUrl: 'iced-coffee/cold-brew.jpg',
        headerPosition: 'center 20%',
        products: [
            {
                name: 'Cold Brew',
                price: '$2.00',
                calories: '270 cal'
            },
            {
                name: 'Nitro Cold Brew',
                price: '$2.00',
                calories: '270 cal'
            },
            {
                name: 'Doubleshot Iced Coffee',
                price: '$3.00',
                calories: '270 cal'
            },
            {
                name: 'Nitro with Cold Foam',
                price: '$3.10',
                calories: '270 cal'
            }
        ]
    }
]

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

export default props => (
    <TvLayout>
        <S.Container>
            <S.Column>
                <BoardCategory category={mockData[0]} />
                <BoardCategory category={mockData[1]} />
            </S.Column>
            <S.Column>
                <BoardCategory category={mockData[2]} />
                <BoardCategory category={mockData[3]} />
            </S.Column>
            <S.Column>
                <BoardCategory category={mockData[0]} />
                <BoardCategory category={mockData[1]} />
            </S.Column>
        </S.Container>
    </TvLayout>
)
