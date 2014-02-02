<?php
  header("Content-type: application/xml");
  $url = "http://search.goo.ne.jp/rss/newkw.rdf";
  readfile($url);
?>