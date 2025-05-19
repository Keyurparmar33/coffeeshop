import React from 'react'

const Product = () => {
    return (
        <>
            <div className='product-block'>
                <div className='product-content'>
                    <div className='product-img'>
                        <img src="assets/images/about-2.jpg" alt="about-img" />
                    </div>
                    <div className='product-text'>
                        <div className='product-container'>
                            <h3>TASTE OUR INGREDIENTS</h3>
                            <p className='title'>Discover our <br />Products</p>

                            <div className='line'>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et orci ut et lobortis, Phasellus enim</p>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et orci ut et lobortis, Phasellus enim</p>
                            </div>
                            <a href="#">ALL PRODUCT</a>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Product