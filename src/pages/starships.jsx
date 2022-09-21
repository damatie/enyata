import React, {useEffect, useState} from 'react'
import { AppLayout } from '../layout/AppLayout'
import { StatCard } from '../components/statCard'
import { statData } from '../utils/Constants'
import DataTable from '../components/table'
import { useNavigate } from 'react-router-dom'
import { 
  getStarships,
  getPeople,
  getFilms
} from '../services/apiFactory'

// Films
const itemsHead = [
  'Name',
  'Model',
  'Class',
  'Passenger',
  'Length',
  'Character'
]
const Starships = () => {
  const [films, setFilms] = useState([])
  const [starShip, setStarShip] = useState([])
  const [filmPeople, setFilmPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  
 const navigate = useNavigate();
  const handleDetails = (id) =>{ 
    const nId = id[0]
    console.log(nId)
     navigate(`/starships/details/${nId}`);
  }

  const fetchPeople = () => {
 
     getPeople().then((res) => 
    {
      // console.log(res.data.results)
       setFilmPeople(res?.data?.results)
       setIsLoading(false)
    }).catch((err) =>
      console.log(err)
    )
     getFilms().then((res) => 
    {
      // console.log(res.data.results)
       setFilms(res?.data?.results)
       setIsLoading(false)
    }).catch((err) =>
      console.log(err)
    )
  }

  useEffect(() => {
    getStarships().then((res) => 
    {
      // console.log(res.data)
      setStarShip(res?.data?.results)
    }).catch((err) =>
      console.log(err))
  }, [films])

    useEffect(() => {
     if (isLoading) {
      fetchPeople()
    }

  }, [isLoading, films,filmPeople ])
// console.log(films)
  return (
    <AppLayout>
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' mt-0'>
          <p className=' text-base text-textColor2 mb-6'>Starships</p>
          <DataTable
            items={starShip}
            itemsHead={itemsHead}
          >
            {Object.values(starShip).map((cellItems, index)=>(
              <tr key={index} className=' border-b cursor-pointer'
                 onClick={() => handleDetails(cellItems.url.match(/\d+/))}
              >
                 <td className="pl-5 py-4">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className=" py-4 w-2/12">
                 {cellItems.name}
                </td>
                <td className=" py-4 w-3/12">
                 {cellItems.model}
                </td>
                <td className=" py-4 w-2/12">
                 {cellItems.starship_class}
                </td>
                <td className=" py-4 w-1/12  break-words ">
                 {cellItems.passengers}
                </td>
                <td className=" py-4 w-1/12 ">
                  {cellItems.length} Meters
                </td>
                <td className=" py-4 w-2/12 truncate">

                  {cellItems && cellItems.films.map((element, eIndex) => {
                    // console.log(element)
                   
                    // console.log()
                    const getData = filmPeople.filter((obj) => obj)
                    
                    // console.log(getData)
                    // return element
                    })}
                </td>

               
              </tr>
            ))}
            </DataTable>
        </div>
      </div>
      </AppLayout>
  )
}
export default Starships