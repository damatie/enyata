import React, {useEffect, useState} from 'react'
import { AppLayout } from '../layout/AppLayout'
import { StatCard } from '../components/statCard'
import { statData } from '../utils/Constants'
import DataTable from '../components/table'
import { getFilms, getPeople, getOnePeople } from '../services/apiFactory'
import Moment from 'react-moment';
import EnhancedTable from '../components/dataTable'
import { data } from 'autoprefixer'
import { Link, useNavigate } from 'react-router-dom'

// Films
const itemsHead = [
  'Film Title',
  'Release Date',
  'Director',
  'Producer',
  'Episode ID',
  'Character'
]
const Home = () => {
  const [films, setFilms] = useState([])
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
  }
   const navigate = useNavigate();

   const handleDetails = (id) =>{ 
    navigate(`/film/details/${id}`);
    //  console.log(id)
  }


  useEffect(() => {
    getFilms().then((res) => 
    {
      // console.log(res)
      setFilms(res?.data?.results)
    }).catch((err) =>
      console.log(err))

  }, [])

   useEffect(() => {
     if (isLoading) {
      fetchPeople()
    }

  }, [films,isLoading])
  // console.log(films)
  return (
    <AppLayout>
      <div className='  flex flex-col w-full   mx-auto justify-evenly, justify-start '>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  w-full xl:w-full
        2xl:w-10/12 gap-4'>
          {statData && statData.map((obj, index) => (
            <StatCard
            key={index}
            name={obj.name}
            icon={obj.icon}
            color={obj.color}
            count={obj.count}
            smallText={obj.smallText}
          />
          ))}
         {/* <Link to={`/details/${cellItems.url.slice(29,30)}`}>
                  
                </Link> */}
        </div>
        <div className=' mt-20'>
          <p className=' text-base text-textColor2 mb-6'>Films</p>
          <DataTable
            items={films}
            itemsHead={itemsHead}
            isLoading={isLoading}
          >
            {films.map((cellItems, index)=>(
              <tr key={index} className=' border-b cursor-pointer'
                onClick={() => handleDetails(cellItems.url.slice(28, 29))}>
                 <td className="pl-5 py-4">
                  <input type="checkbox" className="checkbox" />
                </td>
                
                  <td className=" py-4 w-2/12" >
                 {cellItems.title} 
                </td>
                <td className=" py-4">
                  
                  <Moment format="MM/DD/YYYY">
                    {cellItems.release_date}
                  </Moment>
                </td>
                <td className=" py-4">
                 {cellItems.director}
                </td>
                <td className=" py-4 w-2/12  break-words ">
                 {cellItems.producer}
                </td>
                <td className=" py-4 w-1/12 text-center ">
                  {cellItems.episode_id}
                </td>
                <td className=" py-4 w-2/12 break-words">

                  {cellItems && cellItems.characters.map((element, eIndex) => {
                    const data = filmPeople.filter((obj)=> obj.url === element)
                    // return element.slice(29, 30)
                    // console.log(data)
                    const newData = data&&data[0]?.name.slice(0,4)
                    return newData
                    
                  })}
                 
                </td>
          
              </tr>
            ))}
            </DataTable>
          {/* <EnhancedTable/> */}
        </div>
      </div>
      </AppLayout>
  )
}
export default Home