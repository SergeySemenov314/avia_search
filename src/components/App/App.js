import './App.css';
import Filters from '../Filters/Filters'
import data from '../../Data/flights.json'
import FlightCard from '../FlightCard/FlightCard';
import {  useState } from 'react';

function App() {

  const [filters, setFilters] = useState({
    sort:'', 
    oneTransplant: false, 
    zeroTransplants: false,
    minPrice: 0,
    maxPrice: 10000000,
    companies: [],
  })

  let flightsArr = data.result.flights;

  const [currentFlights, setCurrentFlights] = useState(flightsArr);


  let increasePrice = () => {
    console.log ('increasePrice');

    let flightsArrCory = JSON.parse(JSON.stringify(currentFlights));
    let tmpFlights = flightsArrCory.sort((a, b) =>{
      let firtFlightPrice = Number(a.flight.price.total.amount);
      let secondFlightPrice = Number(b.flight.price.total.amount);
      return firtFlightPrice - secondFlightPrice;
    } )
    setCurrentFlights(tmpFlights);
  }

  let reducePrice = () => {
    console.log ('reducePrice');
    
    let flightsArrCory = JSON.parse(JSON.stringify(currentFlights));
    let tmpFlights = flightsArrCory.sort((a, b) =>{
      let firtFlightPrice = Number(a.flight.price.total.amount);
      let secondFlightPrice = Number(b.flight.price.total.amount);
      return secondFlightPrice - firtFlightPrice;
    } )
    setCurrentFlights(tmpFlights);
  }


  let sortDuration = () => {
    console.log ('sortDuration');
    let flightsArrCory = JSON.parse(JSON.stringify(currentFlights));
    let tmpFlights = flightsArrCory.sort((a, b) =>{
      let firtFlightDuration = Number(a.flight.legs[1].duration + a.flight.legs[0].duration);
      let secondFlightDuration = Number(b.flight.legs[1].duration + b.flight.legs[0].duration);
      return firtFlightDuration - secondFlightDuration;
    } )
    // массив изменяется на месте, переопределять не нужно
    setCurrentFlights(tmpFlights);
  }

  let transplantsFilter = (evt) => {
    let filterTransplantsAmount = evt.target.dataset.amount;
    
    let tmpFlights = currentFlights.filter((item) => {

      let toTransplantsAmount = item.flight.legs[0].segments.length - 1;
      let backTransplantsAmount = item.flight.legs[1].segments.length - 1;
      let transplantsSum = toTransplantsAmount + backTransplantsAmount;

      if (filterTransplantsAmount == transplantsSum) {   
          return true
      }

    })

    setCurrentFlights(tmpFlights);

  }


  let priceFilter = (evt) => {
    let maxPrice = evt.target.value;

    let tmpFlights = currentFlights.filter((item) => {
      let price = item.flight.price.total.amount;
      return price <= maxPrice;
    })
    
    setCurrentFlights(tmpFlights);
  }

  let companyFilter = (evt) => {
    console.log ('companyFilter')
    let filterCompany = evt.target.dataset.company;
    
    let tmpFlights = currentFlights.filter((item) => {

      let flightCompany = item.flight.legs[0].segments[0].airline.caption;

      if (filterCompany == flightCompany) {   
          return true
      }

    })

    setCurrentFlights(tmpFlights);
  }
  




  return (
   <>
   <main>
     <div className="container">
       <div className="main-content">
         <Filters 
         filters = {filters}
         setFilters = {setFilters}

         reducePrice = {reducePrice}
         increasePrice = {increasePrice}
         sortDuration = {sortDuration}
         transplantsFilter = {transplantsFilter}
         priceFilter = {priceFilter}
         companyFilter = {companyFilter}
          />
          <div className="flights">
            <div className="flights__inner">
              
              {currentFlights.map((item, index) => 
                     <FlightCard flight = {item.flight} key = {index} />
              )}
          
            </div>  {/* /flights__inner */}
            <button className="flights__button-more">Показать еще</button>
          </div>    {/* flights */}      
       </div> {/* /main-content */}
     </div>{/* /container */}
     
   </main>
   </>
  );
}

export default App;
