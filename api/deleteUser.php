<?php
require_once("./config.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $id = $data->id;


    $sql = "DELETE FROM users WHERE user_id = $id";

    $query = $con->query($sql);
    if ($query) {
        echo "Data Deleted";
    } else {
        echo "Data delete Failed";
    }

}


?>