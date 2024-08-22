<?php

define('SRC', 'src');
define('WWW', 'app/src/main/assets/www');
libxml_use_internal_errors(true);
setlocale(LC_CTYPE, 'cs_CZ.UTF-8', 'Czech');

require 'vendor/autoload.php';
use Smarty\Smarty;

$smarty = new Smarty();
