import React from 'react';
import image from '../assets/logo.png';


const Navbar = () => {
    return (
        <React.Fragment>
            <section>
                <div
                    className='bg-black h-20 w-full flex items-center'
                    style={{ backgroundColor: '#EBF0F6' }}>
                    <div>
                        <img
                            src={image}
                            alt="logo"
                            style={{ width: '15vw', minWidth: '160px', paddingLeft: '12px' }} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Navbar