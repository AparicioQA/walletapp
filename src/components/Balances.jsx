import React from 'react'

export const Balances = ({ moneda, saldoTotal, efectivo, targeta }) => {
    return (
        <>
            <h2 className='font-semibold text-3xl text-indigo-800 mt-4'>Saldo {moneda}</h2>
            <span>Saldo Total: <span className='text-indigo-800'>{saldoTotal}</span></span>
            <div className='bg-indigo-800 rounded p-4 w-11/12 max-w-sm mt-4'>
                <p className='text-white'>Saldo en efectivo: <span className={efectivo >= 0 ? 'text-lime-300' : 'text-red-500'}>
                    {efectivo}</span></p>
                <p className='text-white'>Saldo en targeta: <span className={targeta >= 0 ? 'text-lime-300' : 'text-red-500'}>{targeta}</span></p>
            </div>
        </>

    )
}
