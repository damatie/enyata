import { AppLayout } from "../layout/AppLayout"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getOneStarship } from "../services/apiFactory";
import { DetailsCard } from "../components/detailsCard";
import Image from '../assets/image2.svg'
import Moment from 'react-moment';


const DetailsStarship = () => {
  const [starShip, setStarShip] = useState()
  const [isLoading, setIsLoading] = useState(true)
   const {id} = useParams()
   const navigate = useNavigate();
  
   const goBack = () => {
        navigate(-1);
  }

  console.log(starShip)
  const getData = () => {
    console.log(id)
    setTimeout(function(){
      getOneStarship(Number(id)).then((res) => 
    {
      // console.log(res)
       setStarShip(res?.data)
       setIsLoading(false)
    }).catch((err) =>
      console.log(err))   
    }, 4000);
 
  }
  
  useEffect(() => {
    getData()
        
  }, [id])
  return (
     <AppLayout isBack={true} onclick={goBack}>
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' mt-0'>
          {!isLoading && <DetailsCard image={Image} name={starShip&&starShip.name} >
            <p>Model: {starShip&&starShip.model}</p>
            <p>Passengers: {starShip&&starShip.passengers}</p>
            <p>Pilots: {starShip&&starShip.pilots}</p>
          </DetailsCard>}

          {isLoading &&
            <div className=" text-center text-base">
              <p> Loading</p>
            </div>
            }
        </div>
      </div>
    </AppLayout>
  )
}
export default DetailsStarship