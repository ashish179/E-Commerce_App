import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./css/subtotal.css";
import {useStateValue}  from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory}  from "react-router-dom";
function Subtotal() {
  const history = useHistory();

  const [{basket},dispatch] = useStateValue();




  
    return (
        <div className="subtotal">
          <CurrencyFormat
           
           renderText={(value) => (
            <>
            <p>
                Subtotal ({basket?.length},items): <strong>{value}</strong>
            </p>
            <small className="subtitle__gifts">
          <input type="checkbox"/> this order contains gifts
            </small>
            </>
              


           )}

           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeperator={true}
           prefix={"$"}
          
          
      />
      <button onClick={e => history.push('/payment')}>procced to checkout</button>
        </div>
    );
}

export default Subtotal