<?php
// CRITICAL: Hardcoded DB credentials
$host = "localhost";
$dbname = "production_db";
$username = "root";
$password = "P@ssw0rd123!"; // Revealed in source code

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
