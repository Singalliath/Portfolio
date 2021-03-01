<?php
include_once 'includes/dbh.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data from SQL</title>
    <link rel="stylesheet" href="../../css\style.css">
    <style>
table {
border-collapse: collapse;
width: 100%;
color: #588c7e;
font-family: monospace;
font-size: 25px;
text-align: left;
}
th {
background-color: #588c7e;
color: white;
}
tr:nth-child(even) {background-color: #f2f2f2}
</style>
</head>
<body>
    <table>
    <tr>
    <th>First-Name</th>
    <th>Last-Name</th>
    <th>Age</th>
    <th>Size</th>
    <th>Hair-Color</th>
    <th>Eye-Color</th>
    </tr>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "demodev");
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM demodb";
    $result = $conn->query($sql);
    if ($result !== false && $result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo 
        "<tr><td>". $row["First-Name"] ."</td><td>".
         $row["Last-Name"] ."</td><td>".
         $row["Age"] ."</td><td>".
         $row["Size"] ."</td><td>".
         $row["Hair-Color"] ."</td><td>".
         $row["Eye-Color"] ."</tr></td>"; 
    }
    echo "</table>";
    } else { echo "0 results"; }
    $conn->close();
    ?>
    </table>
    <a href="../../index.html">Back to Portfolio</a>
</body>
</html>