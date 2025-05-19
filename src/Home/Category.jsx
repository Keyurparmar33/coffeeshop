import React from 'react'

export const Category = () => {
    return (
        <>
            {/* <div className='category-block'>
                <div className='container'>
                    <div className='category-cols'>
                        <div className='category-img'>
                            <img src="assets/images/category-1.jpg" alt="category-1" />
                        </div>
                        <div className='category-text'>PASTRY</div>
                        <div className='content'>
                            <p>COOKIES</p>
                            <a href="#">+</a>
                        </div>
                    </div>
                    <div className='category-cols'>
                        <div className='category-img'>
                            <img src="assets/images/category-1.jpg" alt="category-1" />
                        </div>
                        <div className='category-text'>
                            PASTRY
                        </div>
                        <div className='content'>
                            <p>COOKIES</p>
                            <a href="#">+</a>
                        </div>
                    </div>
                    <div className='category-cols'>
                        <div className='category-img'>
                            <img src="assets/images/category-1.jpg" alt="category-1" />
                        </div>
                        <div className='category-text'>
                            PASTRY
                        </div>
                        <div className='content'>
                            <p>COOKIES</p>
                            <a href="#">+</a>
                        </div>
                    </div>

                </div>
            </div> */}

            <div class="card-grid">
                {/* <div className='container'> */}
                    <div class="card">
                        <img src="/assets/images/category-1.jpg" alt="Cookies" />
                        <div class="label">PASTRY</div>
                        <div class="content">
                            <p>COOKIES</p>
                            <span class="plus">+</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/assets/images/category-2.jpg" alt="Fruit Cake" />
                        <div class="label">SWEET</div>
                        <div class="content">
                            <p>FRUIT CAKE</p>
                            <span class="plus">+</span>
                        </div>
                    </div>

                    <div class="card">
                        <img src="/assets/images/category-3.jpg" alt="Biscuits" />
                        <div class="label">BAKERY</div>
                        <div class="content">
                            <p>BISCUITS</p>
                            <span class="plus">+</span>
                        </div>
                    </div>  
                </div>
                <div class="card-grid">
                {/* <div className='container'> */}
                    <div class="card">
                        <img src="/assets/images/category-4.jpg" alt="category-4" />
                        <div class="label">PASTRY</div>
                        <div class="content">
                            <p>LEMON COOKIE</p>
                            <span class="plus">+</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/assets/images/category-5.jpg" alt="category-5" />
                        <div class="label">SWEET</div>
                        <div class="content">
                            <p>BERRY TART</p>
                            <span class="plus">+</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/assets/images/category-6.jpg" alt="category-6" />
                        <div class="label">BAKERY</div>
                        <div class="content">
                            <p>WEDDING CAKE</p>
                            <span class="plus">+</span>
                        </div>
                    </div>  
                </div>
            {/* </div> */}

        </>
    )
}
