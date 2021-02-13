import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,useHistory} from "react-router-dom";
import {useStateValue}  from "./StateProvider";
import {auth} from "./firebase";

function Header() {


    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();


    const handleAuth = ()=> {


        if(user){
           auth.signOut();
           
        }else{
           history.push('/login');
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img  className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo"/>
            </Link>
         
          <div className="header__search">
     <input className="header_searchInput" type="text"/>
     <SearchIcon className="header__searchIcon"/>
          </div>

          <div className="header__nav">
              <Link to={  !user && '/login'}>
              <div className='header__option' onClick={handleAuth}>
                  <span className="header__optionLineOne">{ user ? user.email:'hello'}</span>
                  <span className="header__optionLineTwo">{ user ? 'signOut':'SignIn'}</span>
              </div>
              </Link>
             
              <div className='header__option'>
              <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">Orders</span>
              </div>
              <div className='header__option'>
              <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
              </div>
              <Link to="/checkout">
              <div className='header__optionBasket'>
              <ShoppingCartIcon/>
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
              </Link>
          </div>
        </div>
    )
}

export default Header
