import React from 'react'
import { useDispatch } from 'react-redux';
export const ListPages = ({ totalPages, reloadPage, setCurrentPage }) => {
    const dispatch = useDispatch();

    function handleClick(event) {
        dispatch(setCurrentPage(parseInt(event.target.innerText)));
        dispatch(reloadPage());
    }

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(<li className='border-indigo-800 border-2 text-indigo-800 p-1 px-4 bg-white' key={i} onClick={handleClick}>{i}</li>);
    }

    return (
        <ul className='flex space-x-2 m-4'>
            {pages}
        </ul>
    )
}
