import React from 'react';
import Logo from '../img/logo.png'

const Header = () => {
	return (
		<div className='header'>
           <div className='d-flex gap-2 align-items-center py-2 bg'>
			   <img src={Logo} className='logo' alt='logo'></img>
			   <div>
			   <h3 className='notes'>Notes</h3>
			   </div>   
		   </div>
			
		</div>
	);
};

export default Header;
