import React from 'react';
import Logo from '../Logo/Logo.jsx';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header className="Header">
				<div className="container">
					<Logo />
				</div>
			</header>
		)
	}
}

export default Header;