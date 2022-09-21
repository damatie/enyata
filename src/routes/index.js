import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Starships from "../pages/starships";
import People from "../pages/people";
import Species from "../pages/species";
import Details from "../pages/details";
import Login from "../pages/login";
import DetailsPeople from "../pages/peopleDetails";
import DetailsStarship from "../pages/starshipsDetails";
import ErrorPage from "../pages/errorPage";

const AllRoutes = () => {
  return (
     <Router>
      <Routes>
         <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='/people' element={<People />} />
        <Route path='/species'   element={<Species />} />
        <Route exact path='/film/details/:id' element={<Details />} />
        <Route exact path='/people/details/:id' element={<DetailsPeople />} />
        <Route exact path='/starships/details/:id' element={<DetailsStarship />} />
        <Route path='*' element={<ErrorPage/> } />
      </Routes>      
      </Router>
  )
}
export default AllRoutes;