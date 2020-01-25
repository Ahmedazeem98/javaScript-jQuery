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

if(isset($_POST['getFromDB'])){
     
    $data = $mysqli->query("select * from events"));
    if ($data =$mysqli->query("select * from events")){
        $items = array();
        if($data->num_rows > 0){
         while($item = $data->fetch_assoc()){
          array_push($items, $item);
         }
        //Convert to JSON Before Sending to Client
        echo json_encode($items);
       }
     }
     else{
      echo "No Data";
     }
    }