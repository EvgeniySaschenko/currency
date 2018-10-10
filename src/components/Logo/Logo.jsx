import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component{
	constructor(props){
		super(props);
		this.props= this.state;
	}

	render(){
		return(
			<Link to="/" className="Logo">
				<img src={ require('./logo.jpg') } className="Logo__img" alt="logo" />
			</Link>
		)
	}
}

export default Logo;