import companyLogo from './lot_logo.png';
import './FlightCard.css';
import CardBoxTo from '../CardBoxTo/CardBoxTo';
import CardBoxBack from '../CardBoxBack/CardBoxBack';

function FlightCard(props) {

  // const [flight, setflight] = useState(props.flight);

    let flight =  props.flight;             
    let price = flight.price.total.amount;
    let currency = flight.price.total.currencyCode;

    // useEffect(() => {
    //   let currentFlight = props.flight
    //   setflight(currentFlight); 
      
    // }, [props]);
    


  return (
   <>
     <div className="flight-card" >
        <div className="flight-card__header">
            <div className="flight-card__logo-container"><img src={companyLogo} alt="" className="flight-card__logo-img"/></div>
            <div className="flight-card__price-container"><span className="flight-card__price-value">{price} {currency}</span><span className="flight-card__price-description">Стоимость для одного взрослого пассажира</span></div>
        </div>
            <CardBoxTo flight = {flight} />
            <hr className='flight-card__hr'/>
            <CardBoxBack  flight = {flight}/>  
        <button className = 'flight-card__button'>Выбрать</button>  
    </div>  
   </>
  );
}

export default FlightCard;
