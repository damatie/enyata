export const Input = (props) => {
  const {
    type,
    value ,
    onClick,
    onChange,
    label,

  } = props
  return (
    <>
      {!label &&
      <input type={type} value={value} onChange={onChange} className=' outline-none border border-gray px-3 py-1 w-full rounded text-sm mb-3' />
      }
      
      {label &&
    <label className=''>
      <span className=" text-xs font-medium capitalize pb-1.5 "> {label}</span>
      <input type={type} value={value}  onChange={onChange} className=' outline-none border border-gray px-3 py-1 w-full rounded text-sm mb-3' />
      </label>
      }
    </>
  )
}