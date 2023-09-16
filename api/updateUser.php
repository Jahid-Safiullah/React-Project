<?php
require_once("./config.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $nid = $data->nid;
    $id = $data->id;

    $sql = "UPDATE users SET user_name = '$name', user_email = '$email', user_phone = '$phone', user_nid = '$nid' WHERE user_id = $id";

    $query = $con->query($sql);
    if ($query) {
        echo "Data Updated";
    } else {
        echo "Data Update Failed";
    }

}


?>