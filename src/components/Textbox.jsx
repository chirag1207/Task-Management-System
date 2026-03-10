import React from 'react'
import clsx from 'clsx';


const Textbox = React.forwardRef(({ placeholder, type, name, label, classNames, register, error }, ref) => {
  return (
    <div className ='w-fullflex flex-col gap-1'>
        {label && <label htmlFor={name} className='text-slate-800'></label>}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref}
          className={clsx('og-transparent px-3 ', classNames)}
          {...register}
        />
        {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  )
}

export default Textbox