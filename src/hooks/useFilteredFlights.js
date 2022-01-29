import React, {useMemo} from 'react';


export const useSortedFlights = (flightsArr, sort) => {

    const sortedFlights = useMemo(() => {
        if(sort) {

            if(sort === 'increasePrice') {
                let sortedFlights = [...flightsArr].sort((a, b) =>{
                  let firtFlightPrice = Number(a.flight.price.total.amount);
                  let secondFlightPrice = Number(b.flight.price.total.amount);
                  return firtFlightPrice - secondFlightPrice;
                } )
                return sortedFlights;
            }
            if(sort === 'reducePrice') {
                let sortedFlights = [...flightsArr].sort((a, b) =>{
                    let firtFlightPrice = Number(a.flight.price.total.amount);
                    let secondFlightPrice = Number(b.flight.price.total.amount);
                    return secondFlightPrice - firtFlightPrice;
                } )
                return sortedFlights;
            }
            if(sort === 'sortDuration') {
                let sortedFlights = [...flightsArr].sort((a, b) =>{
                    let firtFlightDuration = Number(a.flight.legs[1].duration + a.flight.legs[0].duration);
                    let secondFlightDuration = Number(b.flight.legs[1].duration + b.flight.legs[0].duration);
                    return firtFlightDuration - secondFlightDuration;
                })
                return sortedFlights;
            }
        } 

        return flightsArr;

    }, [sort, flightsArr])

    return sortedFlights;

}


export const useFilteredFlights = (flightsArr, filters) => {

    const sortedFlights = useSortedFlights(flightsArr, filters.sort)

    const filteredFlights = [...sortedFlights];

    return filteredFlights;


}