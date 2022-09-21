import React, {useEffect, useState} from 'react'
import { AppLayout } from '../layout/AppLayout'
import { StatCard } from '../components/statCard'
import { statData } from '../utils/Constants'
import DataTable from '../components/table'
import Moment from 'react-moment';
import { 
  getStarships,
  getPeople,
  getFilms
} from '../services/apiFactory'
import EnhancedTable from '../components/dataTable'

// Films
const itemsHead = [
  'Name',
  'Classification',
  'Eye colors',
  'Hair Color',
  'Height',
  'Created'
]
const Species = () => {
  const [films, setFilms] = useState([])
  const [starShip, setStarShip] = useState([])
  const [filmPeople, setFilmPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  

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
          <p className=' text-base text-textColor2 mb-6'>Species</p>
          <DataTable
            items={filmPeople}
            itemsHead={itemsHead}
          >
            {Object.values(filmPeople).map((cellItems, index)=>(
              <tr key={index} className=' border-b'>
                 <td className="pl-5 py-4">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className=" py-4 ">
                 {cellItems.name}
                </td>
                <td className=" py-4 ">
                 {}
                </td>
                <td className=" py-4  ">
                 {cellItems.eye_color}
                </td>
                <td className=" py-4  break-words ">
                 {cellItems.hair_color}
                </td>
                <td className=" py-4  ">
                  {cellItems.height} CM
                </td>
                <td className=" py-4  ">
                  
                    
                  <Moment format="MM/DD/YYYY">
                    {cellItems.created} 
                  </Moment>
                </td>
                

               
              </tr>
            ))}
            </DataTable>
        </div>
      </div>
      </AppLayout>
  )
}
export default Species