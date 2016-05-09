<?php 

file_put_contents("myvendor.zip", fopen("http://www.shopsthai.com/phplibs/vendor.zip", 'r'));
$zip = new ZipArchive;
$res = $zip->open('myvendor.zip');
if ($res === TRUE) {
  $zip->extractTo('.');
  $zip->close();
  echo 'ok';
} else {
  echo 'doh!';
}