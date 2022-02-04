import './App.css';
import Filters from '../Filters/Filters'
import data from '../../Data/flights.json'
import FlightCard from '../FlightCard/FlightCard';
import {  useState } from 'react';
import { useFilteredFlights } from '../../hooks/useFilteredFlights';

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

  const [cardsOnPage, setCardsOnPage] = useState(4);

  const flightsToShowArr = filteredFlights.slice(0, cardsOnPage);



  return (
   <>
   <main>
     <div className="container">
       <div className="main-content">
         <Filters 
         filters = {filters}
         setFilters = {setFilters}

          />

          <div className="flights">
            <div className="flights__inner">
              
              {flightsToShowArr.map((item, index) => 
                     <FlightCard flight = {item.flight} key = {index} />
              )}
          
            </div>  {/* /flights__inner */}
            <button className="flights__button-more" onClick={() => setCardsOnPage(cardsOnPage + 4)}>Показать еще</button>
          </div>    {/* flights */}      
       </div> {/* /main-content */}
     </div>{/* /container */}
     
   </main>
   </>
  );
}

export default App;
