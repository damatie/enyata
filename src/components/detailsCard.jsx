export const DetailsCard = ({ children, ...props }) => {
  const {name ,image} = props
  return (
    <div className=" flex w-full gap-6">
      <div className=" w-[318px] h-[450px]">
       <img src={image} alt="img" width={'450'} className=" mx-auto" />
      </div>
      <div className=' text-base mt-10'>
        <h1 className=' text-[48px] font-bold text-textColor1 mb-7'>{name}</h1>
        <div className=' space-y-2'>
        
          {children}
        </div>
      </div>

    </div>
  )
}