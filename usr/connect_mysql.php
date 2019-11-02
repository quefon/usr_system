<?php
function conn_sql($dbname){
     $servername = "127.0.0.1";
     $username = "";
     $password = "";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: ".$conn->connect_error);
    }
    return $conn; 
}
?>
