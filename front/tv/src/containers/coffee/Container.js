import { useState, useEffect } from 'react'
import CoffeeMenu from './Presentation'
import mockData from './_fallbackData'

export default () => {
    // mock loading until we are reading data from backend
    const [loading, updateLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            updateLoading(false)
        }, 300)
    }, [])

    if (loading) {
        return <CoffeeMenu loading={true} />
    }

    return <CoffeeMenu data={mockData} />
}
