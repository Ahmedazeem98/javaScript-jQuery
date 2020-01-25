

	$.ajax({
		"type":"GET",
        "url":"toServer.php",
        "data":{"EVENTS":""},
        "success":function(response){
				
            console.log("server replayed");
			var $db =JSON.parse(response);
			
			for($i=0;$i<$db.length;$i++){	
			  	
			$("#con").append($db[$i].type + " / "+ $db[$i].target +" / "+
              			$db[$i].date +"<br>");
			 
			  
			}
     
	}
});