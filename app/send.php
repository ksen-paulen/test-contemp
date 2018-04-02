<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mytel = $_POST['mytel'];
  $message = $_POST['message'];
  $error = '';
  if(!$name) {$error .= 'Укажите свое имя. ';}
  if(!$email) {$error .= 'Укажите электронную почту. ';}
  if(!$message || strlen($message) < 1) {$error .= 'Введите сообщение. ';}
  if(!$error) {
    $address = "ksu.paul9677@gmail.com";
    $sub = "Тема сообщения здесь";
    $mes = "Имя: ".$name."\n\nE-mail: ".$email."\n\nТелефон: ".$mytel."\n\nСообщение: ".$message."\n\n";
    $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
    if($send) {echo 'OK';}
  }
  else {echo '<div class="err">'.$error.'</div>';}
}
?>