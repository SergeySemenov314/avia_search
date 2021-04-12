import './Filters.css';

function Filters(props) {


    return (
     <>
      <div className="filters">
            <div className="filters__inner">
                <div className="sort-filter filters__sort">
                    <p className="sort-filter__heading">Сортировать</p>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort1' name = 'sort' className="sort-filter__radio" onChange = {props.increasePrice} />
                      <label htmlFor="sort1" className="sort-filter__label">- по возрастанию цены</label>
                    </div>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort2' name = 'sort' className="sort-filter__radio" onChange = {props.reducePrice}/>
                      <label htmlFor="sort2" className="sort-filter__label">- по убыванию цены</label>
                    </div>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort3' name = 'sort' className="sort-filter__radio" onChange = {props.sortDuration} />
                      <label htmlFor="sort3" className="sort-filter__label">- по времени в пути</label>
                    </div>         
                 </div>
                 <div className="transfer-filter filters__transfer">
                   <p className="transfer-filter__heading">Фильтровать</p>
                   <div className="transfer-filter__input-box">
                      <input type="checkbox" id = 'transfer1' name = 'transfer' className="transfer-filter__radio" data-amount = '1' onChange = {props.transplantsFilter}/>
                      <label htmlFor="transfer1" className="transfer-filter__label">- 1 пересадка</label>
                    </div> 
                    <div className="transfer-filter__input-box">
                      <input type="checkbox" id = 'transfer2' name = 'transfer' className="transfer-filter__radio" data-amount = '0' onChange = {props.transplantsFilter}/>
                      <label htmlFor="transfer2" className="transfer-filter__label">- без пересадок</label>
                    </div>                   
                 </div>
                 <div className="price-filter filters__price">
                   <p className="price-filter__heading">Цена</p>
                   <div className="price-filter__input-box">          
                      <label htmlFor="price1" className="price-filter__label">От</label>
                      <input type="number" id = 'price1' name = 'price' className="price-filter__radio" placeholder ='0'  />
                    </div>  
                    <div className="price-filter__input-box">          
                      <label htmlFor="price2" className="price-filter__label">До</label>
                      <input type="number" id = 'price2' name = 'price' className="price-filter__radio" placeholder ='10000' />
                    </div>  
                 </div>
                 <div className="company-filter filters__company">
                   <p className="company-filter__heading">Авиакомпании</p>
                   <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company1' name = 'company' className="company-filter__radio" data-company = 'Air France' onChange = {props.companyFilter}/>
                      <label htmlFor="company1" className="company-filter__label">
                        <span className="company-filter__name">- Air France </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                    <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company2' name = 'company' className="company-filter__radio" data-company = 'KLM' onChange = {props.companyFilter}/>
                      <label htmlFor="company2" className="company-filter__label">
                        <span className="company-filter__name">- KLM </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                    <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company3' name = 'company' className="company-filter__radio" data-company = 'Аэрофлот - российские авиалинии' onChange = {props.companyFilter}/>
                      <label htmlFor="company3" className="company-filter__label">
                        <span className="company-filter__name">- Аэрофлот - российские авиалинии </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                    <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company4' name = 'company' className="company-filter__radio" data-company = 'TURK HAVA YOLLARI A.O.' onChange = {props.companyFilter}/>
                      <label htmlFor="company4" className="company-filter__label">
                        <span className="company-filter__name">- TURK HAVA YOLLARI A.O. </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                   
                 </div>
              </div>{/* /filters__inner */}
          </div>{/* /filters */}
     </>
    )
}

export default Filters;