import React from 'react';
import CurrencyList from '../CurrencyList/CurrencyList.jsx';
import FormAuth from '../FormAuth/FormAuth.jsx';


class Main extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<main className="Main container">
				<FormAuth />
				<CurrencyList />
			</main>
		)
	}
}

export default Main;