import React from 'react'
import "./css/home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image" alt="poster" src="https://www.theleonews.com/en/wp-content/uploads/2020/11/master-hd-poster.jpg"></img>

                <div className="home__row">
                     <Product title="Season 2 of the web series The Family Man is one of the most-anticipated releases in 2021. "
                      image="https://posterspy.com/wp-content/uploads/2019/08/THE-BOYS.png"
                      price={44}
                      rating={5}
                      />
                    <Product title="Ever since the release of Season 1, The Family Man has received immense love and accolades from across the globe"
                      image="https://images-na.ssl-images-amazon.com/images/I/71QBWv4%2BXsL._AC_SY679_.jpg"
                      price={424}
                      rating={4}
                      />
                     
                </div>
                <div className="home__row">
                <Product title="first product"
                      image="https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-531774/submissions/jgwedjrtkn9d5shl8i1m.jpg"
                      price={55}
                      rating={2}
                      />
                <Product title="first product"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGEIYMgyNT3rgt5eX_5wbrhLgnCm-dgCgww&usqp=CAU"
                      price={666}
                      rating={5}
                      />
               <Product title="first product"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAejovmathoyfoNOKdMOhMpS0x-i7pgl-5g&usqp=CAU"
                      price={4904}
                      rating={4}
                      />
</div>
<div className="home__row">
<Product title="first product"
                      image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-trek-picard-poster-1562790906.jpg?resize=480:*"
                      price={890}
                      rating={3}
                      />
</div>
            </div>
        </div>
    )
}

export default Home
