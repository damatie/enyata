import { AppLayout } from "../layout/AppLayout"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getOnePeople } from "../services/apiFactory";
import { DetailsCard } from "../components/detailsCard";
import Image from '../assets/image1.svg'
import Moment from 'react-moment';


const Details = () => {
  const [people, setPeople] = useState()
  const [isLoading, setIsLoading] = useState(true)
   const {id} = useParams()
   const navigate = useNavigate();
  
   const goBack = () => {
        navigate(-1);
  }

  console.log(people)
  const getData = () => {
    //   console.log(id)
    // setTimeout(function(){
    //   getOnePeople(Number(1)).then((res) => 
    // {
    //   console.log(res)
    //   //  setPeople(res?.data)
    //    setIsLoading(false)
    // }).catch((err) =>
    //   console.log(err))   
    // }, 4000);
 
  }
  
  useEffect(() => {
    getData()
        
  }, [id])
  return (
    <AppLayout isBack={true} onclick={goBack}>
      people
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' mt-0'>hgfguhoi
          {/* {!isLoading && <DetailsCard image={Image} name={people&&people.title} >
            <p>{people&&people.director}</p>
            <p>{people&&people.producer}</p>
            <p>
            
            <Moment format="MMM D YYYY" withTitle>
                {people&&people.release_date}
            </Moment></p>
          </DetailsCard>}

          {isLoading &&
            <div className=" text-center text-base">
              <p> Loading</p>
            </div>
            } */}
        </div>
      </div>
    </AppLayout>
  )
}
export default Details