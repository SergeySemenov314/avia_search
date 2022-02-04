import React, {useMemo} from 'react';

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