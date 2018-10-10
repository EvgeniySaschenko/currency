<?
	switch( $_GET['action'] ){
		case('INIT'):
			echo $_SESSION['auth'] ? 'На сервере запущена сессия, чтобы выйти нажмите кнопку "Выйти"' : '';
			break;
		case('LOGIN'):
			$_SESSION['auth']= 1;
			echo 'На сервере запущена сессия, чтобы выйти нажмите кнопку "Выйти"';
			break;
		case('EXIT'):
			session_unset();
			session_destroy();
			echo '';
			break;
		default:
			echo '';
	}
?>