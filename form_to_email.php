<?php

  $name = $_POST['user_name'];
  $email = $_POST['user_email'];
  $message = $_POST['user_message'];

  //check for blanks
  if (empty($name) || empty($email) || empty($message)){
  	die ("Please fill out all input fields.");	
  }
     
  //check email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      die("Please enter a valid e-mail address.");	
  }


echo "Thanks for RSVPing! We are looking forward seeing you at the Party!";

$body = "Incoming message:";
mail("webdevshelly@gmail.com", "webDevShelly Contact Form", $body);




?>