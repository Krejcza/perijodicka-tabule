<?php

$name = strip_tags(trim($_POST["your-name"]));
$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
$gender = strip_tags(trim($_POST["your-gender"]));
$email = filter_var(trim($_POST["your-mail"]), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($_POST["your-message"]));

    
if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
   header("Location: https://www.perijodickatabule.cz/index.html?success=-1");
   exit;
}


$recipient = "krejci-lukas@seznam.cz";

$subject = "Nová správa ot: $name || Perijodická tabule";


$email_content = "Méno: $name\n";
$email_content .= "Gendr: $gender\n";
$email_content .= "Mejl: $email\n\n";
$email_content .= "Správa:\n$message\n";

$email_headers = "From: $name <$email>";

mail($recipient, $subject, $email_content, $email_headers);
    
header("Location:https://www.perijodickatabule.cz/index.html?success=1");

?>
