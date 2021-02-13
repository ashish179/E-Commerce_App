import React,{useState,useEffect} from 'react'
import {useStateValue}  from "./StateProvider";
import {getBasketTotal} from "./reducer";
import "./css/payment.css";
import CheckoutProduct from './CheckoutProduct';
import {CardElement,useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import {useHistory}  from "react-router-dom";

function Payment() {


    const history= useHistory();
    const [{basket,user},dispatch] = useStateValue();

    const [error,setError]= useState(null);
    const [disabled,setDisabled]= useState(true);
    const [processing,setProcessing]= useState(false);
    const [succeeded ,setsucceeded ]= useState(false);
    const [clientSecret ,setclicentSecret ]= useState(true);


    useEffect(()=> {

        const getClientSecret = async () => {
       
            const res= await axios({

                method:'POST',
                url:`/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setclicentSecret(res.data.clientSecret)
        }
        getClientSecret();

    },[basket])


    const stripe= useStripe()
    const elements= useElements()

console.log(clientSecret);
    const handleSubmit= async(e)=>{
  
        e.preventDefault();

        setProcessing(true);

        const payload= await stripe.confirmCardPayment(clientSecret,{

            payment_method:{


                card:elements.getElement(CardElement)

            }
        }).then(({paymentIntent})=> {

            setsucceeded(true);
            setError(null);
            setProcessing(false);


            history.replace('/orders')
        })
       // const payload= await stripe

    }
    const handleChange= (e)=>{
 
        setDisabled(e.empty);
        setError(e.error ? e.error.message:'');
    }
    return (
        <div className="payment">
      
        <div className="payment__container">
      <h1>
      {basket.length} items
      </h1>

    <div className="payment__section">
       <div className="payment__title">
         <h3>Delivery address</h3>
       </div>
       <div className="payment__address">
            <p>
          {user?.email}
            </p>
            <p> sfd3434</p>
            <p>mumbai,maha</p>
       </div>
    </div>
    <div className="payment__section">
      
      <div className="payment__title">
           <h3>REview item</h3>
      </div>
      <div className="payment__items">
     {basket.map(item => (
         <CheckoutProduct  
         key={item.id}
        id={item.id} 
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
     ))}
      </div>
      </div>
      <div className="payment__section">
      <div className="payment__title">
           <h3>Payment methods</h3>
      </div>
      <div className="payment__details">

   <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange}/>

        <div className="payment__priceContainer">
        <CurrencyFormat
           
           renderText={(value) => (
        
            <h3>
                order  total{value}
            </h3>
          
          
              


           )}

           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeperator={true}
           prefix={"$"}
          
          
      />
      <button disabled={processing || disabled || succeeded }>
          <span>{processing ? <p>processing</p>: "but now"}</span>
      </button>
        </div>
        {error && <div>{error}</div>}
   </form>



          </div>

      </div>
        </div>
        </div>
    )
}

export default Payment
