import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from './DataLayer';
import { getBasketTotal } from './reducer';


const Subtotal = () => {
    const [{ basket } ] = useDataLayerValue();
  return (
    <div>
        <CurrencyFormat 
        renderText={(value)=>(
            <>
                <p className="subtotal__value">Subtotal ({basket.length} items) <strong>{value}</strong></p> 
                
            </>
        )}

        decimalScale={'2'}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        
        />
    </div>
  )
}

export default Subtotal