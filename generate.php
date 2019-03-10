<?php

require('config.php');
require('func.php');

if(!is_dir(WWW)){
	mkdir(WWW, 0755, true);
}

foreach (glob(SRC."/*.html") as $foo) {
	$file = basename($foo);
	$kapitola = file_get_contents($foo);
	$smarty->assign('title', get_title($smarty->fetch('hlavicka.tpl').$kapitola));
	$html = $smarty->fetch('hlavicka.tpl');
	$html .= $kapitola;
	$html .= $smarty->fetch('paticka.tpl');
	file_put_contents(WWW.'/'.$file, $html);

}

copyToDir(SRC.'/kucharka.css', WWW);
copyToDir(SRC.'/roboto-regular.ttf', WWW);
copyToDir(SRC.'/*.js', WWW);
copyToDir(SRC.'/*.svg', WWW);
