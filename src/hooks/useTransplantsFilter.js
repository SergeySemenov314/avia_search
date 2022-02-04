import React, {useMemo} from 'react';

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