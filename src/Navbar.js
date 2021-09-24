import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		  <NavLink to='/about'>
			   About
		  </NavLink>
      <NavLink to='/pages/Halle'>
      HALLE IS AWESOME!
      </NavLink>
      <NavLink to="/textGame">
        Text Game
      </NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
