import { AppLayout } from "../layout/AppLayout"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getOnePeople } from "../services/apiFactory";
import { DetailsCard } from "../components/detailsCard";
import Image from '../assets/image3.svg'
import Moment from 'react-moment';


const DetailsPeople = () => {
  const [people, setPeople] = useState()
  const [isLoading, setIsLoading] = useState(true)
   const {id} = useParams()
   const navigate = useNavigate();
  
   const goBack = () => {
        navigate(-1);
  }

  console.log(people)
  const getData = () => {
      console.log(id)
    setTimeout(function(){
      getOnePeople(Number(id)).then((res) => 
    {
      // console.log(res)
       setPeople(res?.data)
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
          {!isLoading && <DetailsCard image={Image} name={people&&people.name} >
            <p>Gender: {people&&people.gender}</p>
            <p>Skin: {people&&people.skin_color}</p>
            <p>Height: {people&&people.height}CM</p>
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
export default DetailsPeople