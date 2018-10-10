let init= {
	msg: '',
	status: false
}

let formAuth= (store= init, action)=> {
	switch(action.type){
		case('INIT_AUTH_FORM'):{
			if( action.data ){
				store= {
					msg: action.data,
					status: true
				}
			}
			return store;
		}

		case('LOGIN_AUTH_FORM'):{
			store= {
				msg: action.data,
				status: true
			}
			return store;
		}

		case('ERROR_AUTH_FORM'):{
			store= {
				msg: 'Проверьте правильность заполнения полей',
				status: false
			}
			return store;
		}

		case('EXIT_AUTH_FORM'):{
			store= {
				msg: action.data,
				status: false
			}
			return store;
		}

		default:
			return store;
	}
}

export default formAuth;