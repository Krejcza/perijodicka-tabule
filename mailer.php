<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = htmlspecialchars(strip_tags(trim($_POST["your-name"])));
$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
$gender = htmlspecialchars(strip_tags(trim($_POST["your-gender"])));
$email = filter_var(trim($_POST["your-mail"]), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($_POST["your-message"])));

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    error_log("Redirecting to error page due to validation failure.");
    header("Location: https://www.perijodickatabule.cz/napis-my.php?success=-1");
    exit;
}

// Nastavení e-mailu
$recipient = "krejci-lukas@seznam.cz";
$subject = "Nová zpráva od: $name || Perijodická tabule";

$email_content = "Jméno: $name\n";
$email_content .= "Gender: $gender\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Zpráva:\n$message\n";

$email_headers = "From: $name <$email>\r\n";
$email_headers .= "Reply-To: $email\r\n";

// Odeslání e-mailu a přesměrování
if (mail($recipient, $subject, $email_content, $email_headers)) {
    error_log("Mail sent successfully. Redirecting to success page.");
    header("Location: https://www.perijodickatabule.cz/napis-my.php?success=1");
} else {
    error_log("Failed to send mail. Redirecting to error page.");
    header("Location: https://www.perijodickatabule.cz/napis-my.php?success=-1");
}
exit;

?>
