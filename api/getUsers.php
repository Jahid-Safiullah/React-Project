<?php
require_once("./config.php");

$sql = "SELECT * FROM users ORDER BY user_id DESC";
$result = $con->query($sql);
$dataArr = [];

while ($data = $result->fetch_assoc()) {
    $dataArr[] = $data;
}

$dataArr = json_encode($dataArr);
echo $dataArr;
?>