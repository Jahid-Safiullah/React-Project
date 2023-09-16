<?php
require_once("./config.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $nid = $data->nid;

    $sql = "INSERT INTO users(user_name, user_email, user_phone, user_nid) VALUES ('$name', '$email', '$phone', $nid)";

    $query = $con->query($sql);
    if ($query) {
        echo "Data inserted";
    } else {
        echo "Data insertion Failed";
    }

}


?>