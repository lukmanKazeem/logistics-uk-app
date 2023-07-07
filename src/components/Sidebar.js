import React from 'react';
import { SidebarData } from '../data/SidebarData';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-gray-300 flex  justify-start items-center text-slategrey-500 text-2x1 font-bold h-14 w-full mt-7   pl-5 pr-5 ';
    const normalLink = '<hover:bg-gray-15></hover:bg-gray-15>0 flex  justify-start items-center text-slategrey-500 text-2x1 font-normal h-14 w-full mt-7   pl-5 pr-5 '
    return (
        <React.Fragment>
            <section>
                <div className='text-slategray'>
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index}>
                                <NavLink
                                    to={item.url}
                                    className={({ isActive }) => isActive ? activeLink : normalLink} >
                                    <span>{item.title}</span>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Sidebar;