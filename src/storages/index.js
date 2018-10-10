import currencyList from './currencyList.js';
import formAuth from './formAuth.js';


let reducers= Redux.combineReducers({
	currencyList: currencyList,
	formAuth: formAuth
});

let store= Redux.createStore(reducers);

export default store;