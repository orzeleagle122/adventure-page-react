import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLogo,
  MenuIcon,
  NavItem,
  NavLinks,
  NavLinksMobile,
  MenuUl,
  CloseIcon,
  MenuMobileIcon
} from './Navbar.elements';
import { FaAtom } from "react-icons/fa";

const Navbar=()=> {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavbarLogo renderas={Link} to='/' onClick={closeMobileMenu}>
            TRVL
            <FaAtom/>
          </NavbarLogo>
          <MenuIcon onClick={handleClick}>
            {click?<CloseIcon/>:<MenuMobileIcon/>}
          </MenuIcon>
          <MenuUl active={click}>
            <NavItem>
              <NavLinks to='/' renderas={Link} onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services' renderas={Link} onClick={closeMobileMenu}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/products' renderas={Link} onClick={closeMobileMenu}>
                Products
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksMobile renderas={Link} to='/sign-up' onClick={closeMobileMenu}>
                Sign Up
              </NavLinksMobile>
            </NavItem>
          </MenuUl>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </NavbarContainer>
      </NavbarWrapper>
    </>
  )
}

export default Navbar;
