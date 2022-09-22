import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function SidebarFooter(){
    return (
        <footer className='SidebarFooter'>
            <a href='http://wa.me//557996075880' target={'_blank'} className='btn-support'>
                <span><FaWhatsapp /></span>
                <spar>Suporte</spar>
            </a>
        </footer>
    )
}

export default SidebarFooter