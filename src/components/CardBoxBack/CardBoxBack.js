import './CardBoxBack.css';

function CardBoxBack(props) {

    let getDurationString = (duration) => {
        let hours = Math.trunc(duration/60);
        let minutes = duration - (hours * 60);
        return hours + ' ч ' + minutes + ' мин';
    }

    let getDateString = (string) => {
        let date = new Date(string);
        let monthDay = date.getDate();
        let month = date.toLocaleString('ru', {month: 'short'});
        let weekDay = date.toLocaleString('ru', {weekday: 'short'});

        return `${monthDay} ${month} ${weekDay}`;
    }

    let getTimeString = (string) => {
        let date = new Date(string);
        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
    
        if (minutes.length < 2 ) {
            minutes = '0' + minutes;
        }
    
        if (hours.length < 2 ) {
            hours = '0' + hours;
        }

        return `${hours}:${minutes}`;
    }

  
    let flight = props.flight;
    
    let segmentsBack = flight.legs[1].segments;

    let segmentsBackLast= segmentsBack.length - 1;

    // ==================== backDuration ================= 
    let segmentBackDuration = flight.legs[1].duration;
    let segmentBackDurationTotal = getDurationString(segmentBackDuration);
      // ============================= backDeparture======================================

    let segmentBackDepartureCity = segmentsBack[0].departureCity?.caption;
    let segmentBackDepartureAirport = segmentsBack[0].departureAirport.caption;
    let segmentBackDepartureAirportCode = segmentsBack[0].departureAirport.uid;
    // segmentBackDepartureTime. Из этой переменной (строка) можно получить время
    let segmentBackDepartureDate = getDateString(segmentsBack[0].departureDate);
    let segmentBackDepartureTime = getTimeString(segmentsBack[0].departureDate);


    // console.log(segmentBackDepartureDate.toDateString())
    let segmentBackDepartureAirline = segmentsBack[0].airline.caption;
    let segmentBackTransplants = segmentsBack.length - 1;

    // ============================= backArrival======================================

    let segmentBackArrivalCity = segmentsBack[segmentsBackLast].arrivalCity.caption;
    let segmentBackArrivalAirport = segmentsBack[segmentsBackLast].arrivalAirport.caption;
    let segmentBackArrivalAirportCode = segmentsBack[segmentsBackLast].arrivalAirport.uid;
    // segmentBackDepartureTime. Из этой переменной (строка) можно получить время
    let segmentBackArrivalDate = getDateString(segmentsBack[segmentsBackLast].arrivalDate);
    let segmentBackArrivalTime = getTimeString(segmentsBack[segmentsBackLast].arrivalDate);




    return (
     <>
        <div className="flight-card__info-container">
            <div className="flight-card__route">
                <span className="flight-card__route-from">{segmentBackDepartureCity}, <span className = 'flight-card__airport'>{segmentBackDepartureAirport}</span><span className="flight-card__airport-code">({segmentBackDepartureAirportCode})</span> </span>
                <span className="flight-card__route-to">{segmentBackArrivalCity}, <span className = 'flight-card__airport'>{segmentBackArrivalAirport}</span><span className="flight-card__airport-code">({segmentBackArrivalAirportCode})</span></span>
            </div>
            <div className="flight-card__time-container">
                <div className="flight-card__departure"><span className="flight-card__departure-time">{segmentBackDepartureTime}</span> <span className="flight-card__departure-date">{segmentBackDepartureDate}</span>
                </div>
                <div className="flight-card__duration">
                <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                <div className="flight-card__duration-time">{segmentBackDurationTotal}</div>
                </div>
                <div className="flight-card__arrival"><span className="flight-card__arrival-date">{segmentBackArrivalDate}</span> <span className="flight-card__arrival-time">{segmentBackArrivalTime}</span>
                </div>
            </div>
            {segmentBackTransplants
                ? <div className="flight-card__transplants">{segmentBackTransplants} пересадка(-ки)</div>
                : <div className="flight-card__transplants-line"></div>
            }
            <span className="flight-card__company">Рейс выполняет: {segmentBackDepartureAirline}</span>
        </div>
        
     </>
    )
}

export default CardBoxBack;