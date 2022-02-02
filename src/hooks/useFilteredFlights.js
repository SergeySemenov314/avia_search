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


export const useTransplantsFilter = (flightsArr, isOneTransplant, isZeroTransplants) => {

    const transplantsFilteredFlights  = useMemo(() => {
        if (isOneTransplant || isZeroTransplants) {

            const transplantsFilteredFlights = [...flightsArr].filter((item) => {
    
                const toTransplantsAmount = item.flight.legs[0].segments.length - 1;
                const backTransplantsAmount = item.flight.legs[1].segments.length - 1;
                const transplantsSum = toTransplantsAmount + backTransplantsAmount;
    
                if (isOneTransplant && isZeroTransplants) {
                    if (transplantsSum === 1 || transplantsSum === 0) {   
                        return true
                    }
                } else if (isOneTransplant) {
                    if (transplantsSum === 1) {   
                        return true
                    }
                } else if (isZeroTransplants) {
                    if (transplantsSum === 0) {   
                        return true
                    }
                }
            })
    
            return transplantsFilteredFlights;
        }

        return flightsArr;


    }, [flightsArr, isOneTransplant, isZeroTransplants])

    return transplantsFilteredFlights;
}


export const usePriceFilter = (flightsArr, minPrice, maxPrice) => {

    const priceFilteredFlights  = useMemo(() => {

        if(minPrice || maxPrice) {

            let priceFilteredFlights = [];

            if(maxPrice) {

                priceFilteredFlights = [...flightsArr].filter((item) => {
                    let price = item.flight.price.total.amount;
                    return (price >= minPrice) && (price <= maxPrice);
                })

            } 
            else if(minPrice) {

                priceFilteredFlights = [...flightsArr].filter((item) => {
                    let price = item.flight.price.total.amount;
                    return price >= minPrice;
                })

            }
            return priceFilteredFlights;   
        }
        return flightsArr;

    }, [flightsArr, minPrice, maxPrice])

    return priceFilteredFlights;


}

export const useCompaniesFilter = (flightsArr, companies) => {

    const сompaniesFilteredFlights  = useMemo(() => {

        if(companies.length) {

            let сompaniesFilteredFlights = [...flightsArr].filter((item) => {

                let flightCompany = item.flight.legs[0].segments[0].airline.caption;
                return companies.includes(flightCompany);   
            })

            return сompaniesFilteredFlights;
        }
        return flightsArr;

    }, [flightsArr, companies])

    return сompaniesFilteredFlights;


}


export const useFilteredFlights = (flightsArr, filters) => {

    const sortedFlights = useSortedFlights(flightsArr, filters.sort)

    const transplantsFilteredFlights = useTransplantsFilter(sortedFlights, filters.isOneTransplant, filters.isZeroTransplants)

    const priceFilteredFlights = usePriceFilter(transplantsFilteredFlights, filters.minPrice, filters.maxPrice)

    const filteredFlights = [...priceFilteredFlights];

    return filteredFlights;


}