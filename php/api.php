<?php

if(isset($_GET['url'])) {
  /* Make sure the URL is a netpresenter url */
  if(!preg_match('/http:\/\/netpresenter\.tudelft\.nl\/netpresenter\/published/', $_GET['url'])) {
      $response = ['err' => 'Not a netpresenter URL'];
      echo json_encode($response);
      die();
  }

  $index = file_get_contents($_GET['url'] . "/index.chn");

  $pattern = '/^%-- Slide No (\d+).*?BIMAGE "(.*?\.jpg)".*?SECONDS (\d+)/ms';

  $matches = [];
  preg_match_all($pattern, $index, $matches);
  $slides = [];

  /* Map the matches */
  foreach($matches[1] as $key => $match) {
    $slides[$key] = ['href' => $matches[2][$key], 'interval' => $matches[3][$key]];
  }
  echo json_encode($slides);
  die();
} else {
  /* No URL specified */
  $response = ['err' => 'No URL specified'];
  echo json_encode($response);
  die();
}

?>
