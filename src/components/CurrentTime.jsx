import {getCurrentTime} from '../../public/scripts/helper.js'
import { useState } from 'react'

export default function CurrentTime() { 

    let[timeAndDate, setTimeAndDate] = useState(getCurrentTime)

    setInterval(() => {
        setTimeAndDate(getCurrentTime)
    }, 1000)

    return (
        <div className='current-time'>
            <p>{timeAndDate}</p>
        </div>
    )
}
