<?php
$country = $_GET['country'];
$all = $_GET['all'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$stmt_all = $conn->query("SELECT * FROM countries");
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

if ($all == true)
{
    $results = $stmt_all->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) 
    {
      echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}
if ($country == NULL && $all == false )
{
  echo 'Nothing Entered';
  
}
else{

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}