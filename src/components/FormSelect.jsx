import React from "react"
export const FormSelect = ({ title, name, value, handleChange, list }) => {
    return (
        <label>
            {`${title}:`}
            <select name={name} required={true} className='border-0 border-indigo-800 w-36 mx-2 focus:outline-none' value={value} onChange={handleChange}>
                {list && list.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}

            </select>
        </label>
    );
}