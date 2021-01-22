import React,{useState} from 'react';
import {

} from './Navbar.elements';
import {Link} from 'react-router-dom';
import { FaAtom } from "react-icons/fa";


const Navbar = () => {
    return ( 
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo renderas={Link} to='/'>
                        TKTN <FaAtom/>
                    </NavbarLogo>
                    <MenuIcon>
                        
                    </MenuIcon>
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;