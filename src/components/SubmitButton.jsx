import React from 'react'

export const SubmitButton = ({ value }) => {
    return (
        <div className="flex justify-center">
            <input className='py-4 w-96 bg-indigo-800 text-white rounded-lg' type="submit" value={value} />
        </div>
    )
}
