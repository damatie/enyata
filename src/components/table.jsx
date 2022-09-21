
import { HiEmojiSad } from "react-icons/hi";



const DataTable = (props) => {
  const {items, itemsHead ,isLoading} = props
  // console.log(items)

  

  
  
  return(
   <div className="w-full ">
      <div className=" w-full  mt-4 bg-white py-0 border border-[#A4A7B7] 
    rounded-[4px] shadow-sm">  
      {items && items.length>0 &&
     (   <table className=" w-full text-base ">
            <thead>
              <tr className=" text-left border-b">
              <th className="  pl-5 py-4 w-16">
                <input type="checkbox" className="checkbox" />
              </th>
                {itemsHead && itemsHead.map((item, index)=>(
                  <th key={index} className='text-textColor2 font-medium'>{item} </th>
                ))}
                <th></th>
              </tr>
            </thead>
          <tbody className=" border-b">
            {props.children}
          </tbody>
        </table>)
        }
        {items && items.length===0 && !isLoading &&
         (<div className=" w-full mx-auto text-gray-400  text-lg text-center py-6">
            Loading
          </div>) 
         
        }

        {/* {isLoading &&
     
          (<div className=" w-full mx-auto text-gray-400  text-lg text-center py-6">
            Loading
          </div>)
        } */}
    </div>
   </div>
  )
}
export default DataTable