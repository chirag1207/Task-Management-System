import clsx from 'clsx'
import React from 'react'


const Button = ({icon, className, label, type, onClick = () => { } }) => {
    return (
        <button className={clsx('px-3 py-2 outline-none rounded-md', className)} type={type||"button" } onClick={onClick}>
            <span>{label}</span>
            {icon && icon}
        </button>
    )
}

export default Button
