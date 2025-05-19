import React from 'react'

export const Banner = () => {
    return (
        <>
            <div className='hero-block'>
                <div class="hero-image">
                    <img src="assets/images/heroimg.jpg" alt="hero-img" />
                </div>
                <div className='hero-text'>
                    <p>Start your day <br /> with a <span>coffee</span></p>
                </div>
                <div className='hero-textbtm'>
                    <p>Way to much coffee.but if it weren't for <br/> the coffee.
                        I'd have no identifiable <br/> personality whatsoever.</p>
                </div>
                {/* <div className='herobtm-img'>
                    <img src="assets/images/coffee_bottomcurve.png" alt="coffee_bottomcurve" />
                </div> */}
                <div className='hero-btn'>
                    <a href="#">our offer</a>
                </div>
            </div>
        </>
    )
}
