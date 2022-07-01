import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

export const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-2xl text-indigo-800'><FontAwesomeIcon icon={faExclamation} size='3x' /> 404 NotFound</h1>
        </div>
    )
}
