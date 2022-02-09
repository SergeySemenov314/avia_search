import './App.css';
import Filters from '../Filters/Filters'
import data from '../../Data/flights.json'
import { useState } from 'react';
import { useFilteredFlights } from '../../hooks/useFilteredFlights';
import FlightsList from '../FlightsList/FlightsList';

function App() {

  const [filters, setFilters] = useState({
    sort:'', 
    isOneTransplant: false, 
    isZeroTransplants: false,
    minPrice: 0,
    maxPrice: 0,
    companies: [],
  })

  let flightsArr = data.result.flights;

  const filteredFlights = useFilteredFlights(flightsArr, filters);

  return (
   <>
   <main>
     <div className="container">
       <div className="main-content">
         <Filters 
            filters = {filters}
            setFilters = {setFilters}
            flightsArr = {flightsArr}
        />
        <FlightsList 
            filteredFlights = {filteredFlights} 
        />
       </div>
     </div>
   </main>
   </>
  );
}

export default App;
