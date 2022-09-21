import { Icon } from '@iconify/react';

export const StatCard = ({color,icon, name, count, smallText}) => {
  return (
    <div className=" flex flex-col w-full xl:w-[208px]  bg-white rounded-[10px] px-4 py-4 shadow-2xl  ">
      <div className=" flex w-full mb-6">
        <p className='text-textColor1 text-base font-bold flex-1'>
          {name}
        </p>
        <Icon
          icon={icon}
            style={{ fontSize: '22px', marginTop:'3', cursor:'pointer', color:color }}
          />
      </div>
      <div className='flex-col'>
        <p className=' text-textColor1 text-base font-bold'>{count}</p>
        <p className=' text-[9px] text-[#00992B]'>{smallText}</p>
      </div>
    </div>
   )
 }