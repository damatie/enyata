import { AppLayout } from "../layout/AppLayout"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams,useLocation } from "react-router-dom";
import { getOneFilm } from "../services/apiFactory";
import { DetailsCard } from "../components/detailsCard";
import Image from '../assets/image1.svg'
import Moment from 'react-moment';


const Details = () => {
   const location = useLocation();
  console.log(location.pathname)
  const [film, setFilm] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [newId, setNewId] = useState()
   const {id} = useParams()
   const navigate = useNavigate();
  
   const goBack = () => {
        navigate(-1);
  }

  const getData = () => {
      console.log(id)
    setTimeout(function(){
      getOneFilm(Number(id)).then((res) => 
    {
      console.log(res.data)
       setFilm(res?.data)
       setIsLoading(false)
    }).catch((err) =>
      console.log(err))   
    }, 4000);
 
  }
  
  useEffect(() => {
    getData()
        
  }, [newId])
  return (
     <AppLayout isBack={true} onclick={goBack}>
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' mt-0'>
          {!isLoading && <DetailsCard image={Image} name={film&&film.title} >
            <p>Director: {film&&film.director}</p>
            <p>Producer: {film&&film.producer}</p>
            <p>Released Date: <Moment format="MMM D YYYY" withTitle>
                {film&&film.release_date}
            </Moment></p>
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
export default Details