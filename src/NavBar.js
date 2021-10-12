import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
	return(
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/productos">Productos</Link></li>
			<li><Link to="/contact">Contact Us</Link></li>
		</ul>	
	);
}

export default NavBar;