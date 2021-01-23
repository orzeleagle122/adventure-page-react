import React,{useState} from 'react';
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    MenuIcon,
    MenuMobileBar,
    NavBarUl,
    NavBarItem,
    NavBarLink,
} from './Navbar.elements';
import {Link} from 'react-router-dom';
import { FaAtom } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import {Button} from '../';



const Navbar = ({toggle}) => {
    return ( 
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo renderas={Link} to='/'>
                        TKTN <FaAtom/>
                    </NavbarLogo>
                    <MenuIcon>
                        <MenuMobileBar onClick={toggle}/>
                    </MenuIcon>
                    <NavBarUl>
                        <NavBarItem>
                            <NavBarLink renderas={Link} to='/'>
                                Home
                            </NavBarLink>
                            <NavBarLink renderas={Link} to='/'>
                                Sevices
                            </NavBarLink>
                            <NavBarLink renderas={Link} to='/'>
                                Products
                            </NavBarLink>
                            <Button renderas={Link} to='/'>
                                Sign Up
                            </Button>
                        </NavBarItem>
                    </NavBarUl>
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;