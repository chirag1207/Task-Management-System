import React from 'react'
import clsx from 'clsx';


const Textbox = React.forwardRef(({ placeholder, type, name, label, classNames, register, error }, ref) => {
  return (
    <div className={clsx('w-full flex flex-col gap-1', classNames)}>
      {label && <label htmlFor={name} className='text-slate-800'>{label}</label>}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        name={name}
        {...register}
        aria-invalid={error ? "true" : "false"}
        className={clsx('bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300', classNames)}
        
      />
      {error && <span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>}
    </div>
  )
})

export default Textbox