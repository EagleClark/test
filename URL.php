<?php
$event=$_POST['event'];
if($event==="encode"){
$word=$_POST['word'];
$URLtext=urlencode($word);
echo $URLtext;
}
if($event==='decode'){
$URLtext=$_POST['URLtext'];
$word=urldecode($URLtext);
echo $word;
}
?>

