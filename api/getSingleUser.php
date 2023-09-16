<?php
require_once("./config.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $id = $data->id;


    $sql = "SELECT * FROM users WHERE user_id = $id";
    $result = $con->query($sql);
    $data = $result->fetch_assoc();
    $data = json_encode($data);
    echo $data;

}

?>