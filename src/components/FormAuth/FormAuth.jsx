import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FormAuth extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.init();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.data.formAuth.status){
			this.refs.name.value= '';
			this.refs.mail.value= '';
			this.refs.pass.value= '';
		}
	}

	sendData(){
		let{ name, mail, pass }= this.refs;
		let { formAuth }= this.props.data;
		// Если пользователь не авторизован
		if( !formAuth.status ){
			if( mail.value.indexOf('@') + 1 && pass.value && name.value ){

				let formData= new FormData();
				formData.append('name', name.value);
				formData.append('mail', mail.value);
				formData.append('pass', pass.value);
				this.props.sendData(formData);
	
			} else {
				this.props.error();
			}
		 } else {
			// Если пользователь авторизован
			this.props.sendData(false);
		 }

	}

	render(){
		let { formAuth }= this.props.data;

		return(
			<div className="FormAuth">
					<h2 className={`FormAuth__title ${ formAuth.status ? 'd-none' : '' }`}> Авторизация </h2>
					<div className="form-group">
						<input ref="name" type="text" className={`form-control ${ formAuth.status ? 'd-none' : '' }`} placeholder="Ваше имя"/>
					</div>
					<div className="form-group">
						<input ref="mail" type="email" className={`form-control ${ formAuth.status ? 'd-none' : '' }`} aria-describedby="emailHelp" placeholder="Ваш E-mail"/>
					</div>
					<div className="form-group">
						<input ref="pass" type="password" className={`form-control ${ formAuth.status ? 'd-none' : '' }`} placeholder="Ваш пароль"/>
					</div>
					<div className={`alert alert-warning ${ formAuth.msg ? '' : 'd-none' }`} role="alert">
						{ formAuth.msg }
					</div>
					<div className="d-flex justify-content-center">
						<button ref="btnSend" className="btn btn-primary btn-lg" onClick={ this.sendData.bind(this) }> { formAuth.status ? 'Выйти' : 'Отправить' } </button>
					</div>
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
				axios.get(window.srcData + 'ctr/index.php?ctr=auth&action=INIT')
					.then((res)=>{
						dispatch({
							type: 'INIT_AUTH_FORM',
							data: res.data
						})
					})
					.catch( (err)=> console.log(err) )
			},
			sendData:	(formData)=>{
				let action= formData ? 'LOGIN' : 'EXIT';
				axios({
					method: 'post',
					url: window.srcData + 'ctr/index.php?ctr=auth&action=' + action,
					data: formData
				})
				.then((res)=>{
					dispatch({
						type: action + '_AUTH_FORM',
						data: res.data
					})
				})
				.catch( (err)=> console.log(err) )
			},
			error:	()=>{
				dispatch({
					type: 'ERROR_AUTH_FORM'
				})
			}
		}
	}
)(FormAuth);