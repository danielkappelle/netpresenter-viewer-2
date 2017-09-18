<?php

if(isset($_GET['url'])) {
  /* TODO: Verify URL */
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
