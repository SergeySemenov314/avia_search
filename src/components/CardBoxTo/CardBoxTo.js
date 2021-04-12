import './CardBoxTo.css';

function CardBoxTo(props) {

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

    let segmentsTo = flight.legs[0].segments;

    let segmentsToLast = segmentsTo.length - 1;

    // ==================== ToDuration ================= 
    let segmentToDuration = flight.legs[0].duration;
    let segmentToDurationTotal = getDurationString(segmentToDuration);

      // ============================= ToDeparture======================================
    let segmentToDepartureCity = segmentsTo[0].departureCity.caption;
    let segmentToDepartureAirport = segmentsTo[0].departureAirport.caption;
    let segmentToDepartureAirportCode = segmentsTo[0].departureAirport.uid;
    let segmentToDepartureDate = getDateString(segmentsTo[0].departureDate);
    let segmentToDepartureTime = getTimeString(segmentsTo[0].departureDate);

    let segmentToDepartureAirline = segmentsTo[0].airline.caption;
    let segmentToTransplants = segmentsTo.length - 1;

    // ============================= ToArrival======================================
    let segmentToArrivalCity = segmentsTo[segmentsToLast].arrivalCity?.caption;
    let segmentToArrivalAirport = segmentsTo[segmentsToLast].arrivalAirport.caption;
    let segmentToArrivalAirportCode = segmentsTo[segmentsToLast].arrivalAirport.uid;
    let segmentToArrivalDate = getDateString(segmentsTo[segmentsToLast].arrivalDate);
    let segmentToArrivalTime = getTimeString(segmentsTo[segmentsToLast].arrivalDate);

    return (
     <>
        <div className="flight-card__info-container">
            <div className="flight-card__route">
                <span className="flight-card__route-from">{segmentToDepartureCity}, <span className = 'flight-card__airport'>{segmentToDepartureAirport}</span><span className="flight-card__airport-code">({segmentToDepartureAirportCode})</span> </span>
                <span className="flight-card__route-to">{segmentToArrivalCity}, <span className = 'flight-card__airport'>{segmentToArrivalAirport}</span><span className="flight-card__airport-code">({segmentToArrivalAirportCode})</span></span>
            </div>
            <div className="flight-card__time-container">
                <div className="flight-card__departure"><span className="flight-card__departure-time">{segmentToDepartureTime}</span> <span className="flight-card__departure-date">{segmentToDepartureDate}</span>
                </div>
                <div className="flight-card__duration">
                <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                <div className="flight-card__duration-time">{segmentToDurationTotal}</div>
                </div>
                <div className="flight-card__arrival"><span className="flight-card__arrival-date">{segmentToArrivalDate}</span> <span className="flight-card__arrival-time">{segmentToArrivalTime}</span>
                </div>
            </div>
            {segmentToTransplants
                ? <div className="flight-card__transplants">{segmentToTransplants} пересадка(-ки)</div>
                : <div className="flight-card__transplants-line"></div>
            }
            

            <span className="flight-card__company">Рейс выполняет: {segmentToDepartureAirline}</span>
        </div>
    
     </>
    )
}

export default CardBoxTo;