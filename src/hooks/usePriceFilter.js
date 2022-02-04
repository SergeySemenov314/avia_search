import React, {useMemo} from 'react';

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