import React from 'react'

const Read = () => {
    return (
        <>
            {/* read block 1 */}
            <div className='read-block'>
                <div className='container'>
                    <div className='read-content'>
                        <div className='read-text'>
                            <h3>GLUTEN FREE</h3>
                            <p className='readme-love'>Cookies</p>
                            <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat<br />dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis<br /> sem  sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis <br /> malesuada felis.</p>
                            <a href="#">DETAILS</a>
                        </div>
                        <div className='read-img'>
                            <img src="assets/images/read-1.jpg" alt="read-1" />
                            <div className='read-txt'>
                                <h3>CHOCOLATE</h3>
                                <p>BISCUITS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* read block 2 */}
            <div className='read-block'>
                <div className='container'>
                    <div className='read-content'>
                        <div className='read-img'>
                            <img src="assets/images/read-2.jpg" alt="read-2" />
                            <div className='read-txt'>
                                <h3>PANCAKE</h3>
                                <p>HONEY</p>
                            </div>
                        </div>
                        <div className='read-text'>
                            <h3>ORGANIC</h3>
                            <p className='readme-love'>Sweets</p>
                            <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat<br />dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis<br /> sem  sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis <br /> malesuada felis.</p>  
                            <div className='read-btn2'>
                                <a href="#">READMORE</a>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

        </>

    )
}

export default Read