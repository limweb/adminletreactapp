<?php

$zip = new ZipArchive;
$res = $zip->open('vendor.zip');
if ($res === TRUE) {
  $zip->extractTo('.');
  $zip->close();
  echo 'ok';
} else {
  echo 'doh!';
}