import { useCompaniesFilter } from "./useCompaniesFilter"
import { usePriceFilter } from "./usePriceFilter"
import { useSortedFlights } from "./useSortedFlights"
import { useTransplantsFilter } from "./useTransplantsFilter"


export const useFilteredFlights = (flightsArr, filters) => {

    const sortedFlights = useSortedFlights(flightsArr, filters.sort)

    const transplantsFilteredFlights = useTransplantsFilter(sortedFlights, filters.isOneTransplant, filters.isZeroTransplants)

    const priceFilteredFlights = usePriceFilter(transplantsFilteredFlights, filters.minPrice, filters.maxPrice)

    const сompaniesFilteredFlights = useCompaniesFilter(priceFilteredFlights, filters.companies)

    const filteredFlights = сompaniesFilteredFlights;

    return filteredFlights;
}