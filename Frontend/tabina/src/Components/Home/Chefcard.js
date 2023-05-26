import React from 'react';
import gordon from '../../Image/img/recipe/gordon_ramsay.png'
import jamie from '../../Image/img/recipe/jamie.png'
import jock from '../../Image/img/recipe/jock.png'
import peter from '../../Image/img/recipe/peter.png'
import shape1 from '../../Image/img/recipe/Shape.png'
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../Css/page/home/chefcard.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const Chefcard = () => {
    return (
        <>
        <div className='chefcard-container'>

            <div className='chefcard-title'>Our Sponsor Chefs</div>

            <Splide className='chefcard-chefs'
            options={{
                type: "slide",
                rewind: true,
                arrows: false,
                pagination: false,
                perPage: 4,
                perMove: 1,
                breakpoints: {
                  1330: {
                    perPage: 3,
                  },
                  1200: {
                    perPage: 2,
                  },
                  685: {
                    perPage: 1,
                  }
                },
              }}>
                <SplideSlide>
                    <div className='chefcard'>
                        <img src = {gordon} className='chefimg' />
                        <p className='chefname'>Gordon Ramsay</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='chefcard'>
                        <img src = {jamie} className='chefimg' />
                        <p className='chefname'>Jamie Oliver</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='chefcard'>
                        <img src = {jock} className='chefimg' />
                        <p className='chefname'>Jock Zonfrillo</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='chefcard'>
                        <img src = {peter} className='chefimg' />
                        <p className='chefname'>Peter Gilmore</p>
                    </div>  
                </SplideSlide>
            </Splide>

            <div>
                <Link to={`/recipes`}>
                <button className='rcpbtn'>VIEW MORE RECIPE</button>
                </Link>
            </div>

        </div>
        </>

    )

}

export default Chefcard