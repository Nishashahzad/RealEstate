<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database credentials
    $servername = "localhost";
    $username = "root"; // change to your database username
    $password = ""; // change to your database password
    $dbname = "registration";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Collect form data
    $firstName = $conn->real_escape_string($_POST['first-name']);
    $lastName = $conn->real_escape_string($_POST['last-name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $help = $conn->real_escape_string($_POST['help']);

    // Insert data into the database
    $sql = "INSERT INTO person (first_name, last_name, email, phone, help) VALUES ('$firstName', '$lastName', '$email', '$phone', '$help')";

    if ($conn->query($sql) === TRUE) {
        // Send email using PHPMailer
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com'; // Set the SMTP server to send through
            $mail->SMTPAuth   = true;
            $mail->Username   = 'nishashahzad26@gmail.com'; // SMTP username
            $mail->Password   = 'whad yfgh syms rzdm'; // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom('noreply@example.com', 'Mailer');
            $mail->addAddress('nishashahzad26@gmail.com', 'Nisha Shahzad'); // Add a recipient

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Contact Form Submission';
            $mail->Body    = "You have received a new message from your website contact form.<br><br>".
                             "Here are the details:<br>".
                             "First Name: $firstName<br>".
                             "Last Name: $lastName<br>".
                             "Email: $email<br>".
                             "Phone: $phone<br>".
                             "Help: $help<br>";

            $mail->send();
            echo '<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #4CAF50; background-color: #f9fff9; border-radius: 10px; text-align: center; font-family: Arial, sans-serif; color: #4CAF50;">
                    <h2 style="color: #4CAF50;">Success!</h2>
                    <p>New record created successfully and email sent.</p>
                  </div>';
        } catch (Exception $e) {
            echo '<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #f44336; background-color: #fff9f9; border-radius: 10px; text-align: center; font-family: Arial, sans-serif; color: #f44336;">
                    <h2 style="color: #f44336;">Error!</h2>
                    <p>New record created successfully, but email could not be sent. Mailer Error: ' . $mail->ErrorInfo . '</p>
                  </div>';
        }
    } else {
        echo '<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #f44336; background-color: #fff9f9; border-radius: 10px; text-align: center; font-family: Arial, sans-serif; color: #f44336;">
                <h2 style="color: #f44336;">Error!</h2>
                <p>Error: ' . $sql . '<br>' . $conn->error . '</p>
              </div>';
    }

    // Close the connection
    $conn->close();
}
?>
