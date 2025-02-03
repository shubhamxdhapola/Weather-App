import * as Helper from './helper.js'
import { useState } from 'react'

export default function CurrentTime() { 

    let[timeAndDate, setTimeAndDate] = useState(Helper.getCurrentTime)

    setInterval(() => {
        setTimeAndDate(Helper.getCurrentTime)
    }, 1000)

    return (
        <div className='current-time'>
            <p>{timeAndDate}</p>
        </div>
    )
}
