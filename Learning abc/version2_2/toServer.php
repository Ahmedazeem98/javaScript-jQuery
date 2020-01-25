<?php
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "web_project");

$mysqli = new mysqli(DB_HOST, DB_USER,DB_PASSWORD,DB_DATABASE);

if(isset($_POST['DATA'])){

    $data = json_decode($_POST['DATA'], true);
    for($i = 0; $i < count($data); $i++){
		$interaction = [];
		$index=0;
      foreach ($data[$i] as $key => $value) {

             $interaction[$index++]=$value;
          }
          $mysqli->query("INSERT INTO events VALUES ('','$interaction[0]','$interaction[1]','$interaction[2]')");
        
}
}


if(isset($_GET['EVENTS'])){
	 
    if ($result =$mysqli->query("SELECT * from events")){
        $rows = array();
        if($result->num_rows > 0){
         while($row = $result->fetch_assoc()){
          array_push($rows, $row);
         }
        
        echo json_encode($rows);
       }
     }
     else{
      echo "No Data to Retrieve";
     }
    }
    ?>