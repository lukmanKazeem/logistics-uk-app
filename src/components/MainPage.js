import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NavPage from './NavPage';

const MainPage = () => {
    return (
        <>
            {/* Heading section */}
            <section>
                <div>
                    <Navbar></Navbar>
                </div>
            </section>

            {/* Sidebar section */}
            <section>
                <div className='grid grid-cols-12'>
                    <div
                        className='col-span-2 h-screen pl-2'
                        style={{ minWidth: '250px', backgroundColor: '#EBF0F6' }}>
                            <Sidebar></Sidebar>
                        </div>

                    <div
                        className='col-span-10 h-screen pl-2'
                        style={{ backgroundColor: '#FBFDFC'}}>
                            <NavPage></NavPage>
                        </div>
                </div>
            </section>
        </>
    );
}

export default MainPage;