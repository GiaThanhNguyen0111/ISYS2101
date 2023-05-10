import React from 'react';
import gordon from '../../Image/img/recipe/gordon_ramsay.png'
import jamie from '../../Image/img/recipe/jamie.png'
import jock from '../../Image/img/recipe/jock.png'
import peter from '../../Image/img/recipe/peter.png'
import shape1 from '../../Image/img/recipe/Shape.png'
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../Css/chefcard.css'

const Chefcard = () => {
    return (
        <>
        <div className='sponsor-area'>

            <div className='sponsor-title'>Our Sponsor Chefs</div>

            <div className='sponsorchef'>
                <div className='chefcard'>
                    <img src = {gordon} className='chefimg' />
                    <p className='chefname'>Gordon Ramsay</p>
                </div>
                <div className='chefcard'>
                    <img src = {jamie} className='chefimg' />
                    <p className='chefname'>Jamie Oliver</p>
                </div>
                <div className='chefcard'>
                    <img src = {jock} className='chefimg' />
                    <p className='chefname'>Jock Zonfrillo</p>
                </div>
                <div className='chefcard'>
                    <img src = {peter} className='chefimg' />
                    <p className='chefname'>Peter Gilmore</p>
                </div>
            </div>

            <div>
                <button className='rcpbtn'>VIEW MORE RECIPE</button>
            </div>

        </div>
        </>

    )

}

export default Chefcard