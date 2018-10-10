let init= [];

let currencyList= (store= init, action) =>{
	switch(action.type){

		case('INIT_CURENCY_LIST'): {
			return action.data;
		}

		default:
			return store;
	}
}

export default currencyList;