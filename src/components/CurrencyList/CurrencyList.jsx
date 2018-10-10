import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CurrencyList extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.init();
	}

	render(){
		let { currencyList }= this.props.data;
		let template= currencyList.map( (e, i)=>{
			return(<div className="CurrencyList__item row" key={ i }>
								<div className="CurrencyList__col_title col-2">
									{ e.r030 }
								</div>
								<div className="CurrencyList__col_title col-2">
									{ e.cc }
								</div>
								<div className="CurrencyList__col_title col-4">
									{ e.txt }
								</div>
								<div className="CurrencyList__col_title col-2">
									{ e.rate }
								</div>
								<div className="CurrencyList__col_title col col-2">
									{ e.exchangedate }
								</div>
							</div>)
		});
		return(
			<div className="CurrencyList table table-striped">
				<h2 className="CurrencyList__title"> Курсы НБУ </h2>
				<div className="CurrencyList__header row">
					<div className="CurrencyList__col_header col-2">
						Числовой код
					</div>
					<div className="CurrencyList__col_header col-2">
						Буквенный код
					</div>
					<div className="CurrencyList__col_header col-4">
						Название
					</div>
					<div className="CurrencyList__col_header col-2">
						Курс
					</div>
					<div className="CurrencyList__col_header col col-2">
						Дата
					</div>
				</div>
				{ template }
			</div>
		)
	}
}

export default connect(
	store => {
		return{
			data: store
		}
	},
	dispatch => {
		return{
			init:	()=>{
				axios.get(window.srcData + 'ctr/index.php?ctr=currency&action=GET_CURENCY_LIST')
					.then((res)=>{
						dispatch({
							type: 'INIT_CURENCY_LIST',
							data: res.data
						})
					})
					.catch( (err)=> console.log(err) )
			}
		}
	}
)(CurrencyList);