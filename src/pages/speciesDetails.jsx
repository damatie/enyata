import { AppLayout } from "../layout/AppLayout"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getOneSpecies } from "../services/apiFactory";
import { DetailsCard } from "../components/detailsCard";
import Image from '../assets/image4.svg'
import Moment from 'react-moment';


const DetailsSpecies = () => {
  const [species, setSpecies] = useState()
  const [isLoading, setIsLoading] = useState(true)
   const {id} = useParams()
   const navigate = useNavigate();
  
   const goBack = () => {
        navigate(-1);
  }

  console.log(species)
  const getData = () => {
      console.log(id)
    setTimeout(function(){
      getOneSpecies(Number(id)).then((res) => 
    {
      // console.log(res)
       setSpecies(res?.data)
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
          {!isLoading && <DetailsCard image={Image} name={species&&species.name} >
            <p>Designation: {species&&species.designation}</p>
            <p>Language: {species&&species.language}</p>
            <p>Eye Colors: {species&&species.eye_colors}</p>
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
export default DetailsSpecies