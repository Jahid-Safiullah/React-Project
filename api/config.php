<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Database Connection
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "test_crud";

$con = new mysqli($host, $user, $pass, $dbname);

if ($con->connect_error) {
    echo "DB connection error";
}
?>