import React, { useState } from 'react'
import DriversTables from '../components/DriversTables'

const Home = () => {

    return (
        <React.Fragment>
               
                {/* <div className="flex flex-column px-10 py-0 align-items-center "> */}
                <div className="  px-10 py-0 align-items-center ">
                    <DriversTables></DriversTables>

                </div>

        </React.Fragment>
    )
}

export default Home