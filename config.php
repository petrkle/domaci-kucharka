<?php

define('SRC', 'src');
define('WWW', 'www');
libxml_use_internal_errors(true);
setlocale(LC_CTYPE, 'cs_CZ.UTF-8', 'Czech');

require 'vendor/autoload.php';
$smarty = new Smarty();
