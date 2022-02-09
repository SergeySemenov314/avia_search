import React, {useMemo} from 'react';

export const useGetAllCompanies = (flightsArr) => {

    const сompaniesArr  = useMemo(() => {

        const сompaniesArr = [];

        flightsArr.forEach(function(item) {
            let flightCompany = item.flight.legs[0].segments[0].airline.caption;
    
            if(!сompaniesArr.includes(flightCompany)) {
                сompaniesArr.push(flightCompany);
            }
    
        })
        return сompaniesArr;
       
    }, [flightsArr])

    return сompaniesArr;
}