<?php
//Connect to MySQL
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'jsshoutbox';

$con = mysqli_connect($host,$user,$password,$database);

//Checking a connection

if (mysqli_connect_errno()){
    echo 'Failed to connect: ' .mysqli_connect_error();
}
?>

