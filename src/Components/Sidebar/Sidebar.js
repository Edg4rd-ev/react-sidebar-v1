import React from 'react'
import "../../App.css"
import { SidebarData } from './SidebarData'
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'

function Sidebar(){
    return(
        <div className='Sidebar'>
            <SidebarHeader/>
            <ul className='SidebarMenuOp'>
                {SidebarData.map((val,key)=>{
                    return(
                        <li className='SidebarMenuItens' key={key} onClick={()=>{window.location.pathname = val.link}}>
                            <div id='SidebarIcon'>{val.icon}</div>
                            <div id='SidebarTitle'>{val.title}</div>
                        </li>
                    )})}
            </ul>
            <SidebarFooter />
        </div>
    ) 
}

export default Sidebar