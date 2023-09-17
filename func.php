<?php

function copyToDir($pattern, $dir)
{
    foreach (glob($pattern) as $file) {
        $dest = realpath($dir) . DIRECTORY_SEPARATOR . basename($file);
        if(is_file($file)) {
            copy($file, $dest);
        }
    }
}

function get_title($html){
  $navrat = array();
  $dom = new DOMDocument();
  $dom->loadHTML($html);
  $xpath = new DOMXPath($dom);
  $nadpis = $xpath->query("//h1");
  return($nadpis[0]->nodeValue);
}
