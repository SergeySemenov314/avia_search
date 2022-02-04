import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import FlightCard from '../FlightCard/FlightCard';
import './FlightsList.css';

function FlightsList({filteredFlights}) {

    const [cardsOnPage, setCardsOnPage] = useState(4);

    const flightsToShowArr = filteredFlights.slice(0, cardsOnPage);

    useEffect(() => {
        setCardsOnPage(4)
    }, [filteredFlights])

    return (
        <>
            {flightsToShowArr.length
                ?   <div className="flights">
                        <div className="flights__inner">
                            {flightsToShowArr.map((item, index) => 
                                    <FlightCard flight = {item.flight} key = {index} />
                            )}
                        </div> 
                        <button className="flights__button-more" onClick={() => setCardsOnPage(cardsOnPage + 4)}>Показать еще</button>
                    </div>   
                : <div className='flights__alarm'>Рейсов по указанным параметрам не найдено</div>
            }
        </>
    )
}

export default FlightsList;