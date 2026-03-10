import clsx from 'clsx'
import React from 'react'

const Button = ({ className, label, type, onClick = () => { } }) => {
    return (
        <button className={clsx('px-3 py-2 outline-none rounded', className)} type={type||"button" } onClick={onClick}>
            <span>{label}</span>
        </button>
    )
}

export default Button
