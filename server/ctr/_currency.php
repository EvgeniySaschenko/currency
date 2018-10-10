<?
	switch( $_GET['action'] ){
		case('GET_CURENCY_LIST'):
			echo file_get_contents('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
			break;
		default:
			echo null;
	}
?>