import React, {useEffect, useState} from 'react'
import { AppLayout } from '../layout/AppLayout'
import { StatCard } from '../components/statCard'
import { statData } from '../utils/Constants'
import DataTable from '../components/table'
import { useNavigate } from 'react-router-dom'
import Moment from 'react-moment';
import { 
  getStarships,
  getSpecies,
  getPeople,
  getFilms
} from '../services/apiFactory'

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
  const [species, setSpecies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate();
  const handleDetails = (id) =>{ 
    const nId = id[0]
    console.log(nId)
     navigate(`/species/details/${nId}`);
  }


  useEffect(() => {
    getSpecies().then((res) => 
    {
      console.log(res.data)
      setStarShip(res?.data?.results)
    }).catch((err) =>
      console.log(err))
  }, [films])

// console.log(films)
  return (
    <AppLayout>
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' mt-0'>
          <p className=' text-base text-textColor2 mb-6'>Species</p>
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
                <td className=" py-4 ">
                 {cellItems.name}
                </td>
                <td className=" py-4 ">
                 {cellItems.classification}
                </td>
                <td className=" py-4  ">
                 {cellItems.eye_colors}
                </td>
                <td className=" py-4  break-words ">
                 {cellItems.hair_colors}
                </td>
                <td className=" py-4  ">
                  {cellItems.height} n/a
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