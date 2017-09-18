<?php

if(isset($_GET['url'])) {
  if(!preg_match('/http:\/\/netpresenter\.tudelft\.nl\/netpresenter\/published/', $_GET['url'])) {
      $response = ['err' => 'Not a netpresenter URL'];
      echo json_encode($response);
      die();
  }
  $matches = [];
  $html = file_get_contents($_GET['url']);
  preg_match_all("/>(\S+\.jpg)</", $html, $matches);
  $matches = $matches[1];
  echo json_encode($matches);
  die();
} else {
  $response = ['err' => 'No URL specified'];
  echo json_encode($response);
  die();
}

?>
