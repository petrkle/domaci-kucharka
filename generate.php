<?php

require('config.php');
require('func.php');

if(!is_dir(WWW)) {
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

$VERSION = `git describe --tags --always --dirty`;

$smarty->assign('VERSION', $VERSION);
$smarty->assign('title', 'O programu');
$html = $smarty->fetch('hlavicka.tpl');
$html .= $smarty->fetch('about.tpl');
$html .= $smarty->fetch('paticka.tpl');
file_put_contents(WWW.'/about.html', $html);

copyToDir(SRC.'/*.css', WWW);
copyToDir(SRC.'/roboto-regular.ttf', WWW);
copyToDir(SRC.'/*.js', WWW);
copyToDir(SRC.'/*.svg', WWW);
copyToDir('img/hrnec.svg', WWW);
