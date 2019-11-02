<?php
    #get input data

    $country = $_POST['county'];
    $district = $_POST['dist'];
    $type = $_POST['topic']; //this is an array
    $school = $_POST['school'];
    $project = $_POST['project'];
    
    //echo "country = ".$country."<br>";
    //echo "country = ".$district."<br>";
    //print_r($type);
    //echo "country = ".$school."<br>";
    //echo "country = ".$project."<br>";
    
    #php variable
    $data = array();
    $count=0;
    $sql = "SELECT b.name as 'project', a.abstract as 'content', a.name, a.type, c.city, c.district FROM project a,school b, fields c, reversion_project_field_relation d WHERE a.school_id=b.id AND a.id=d.reversion_project_id AND d.field_id=c.id";

    #Search result from the database
    if($country != null) {
        $sql .= " AND c.city='$country'";
        if($district != null)
        $sql .= " AND c.district='$district'";
        //$sql .= "AND field.name LIKE '%$country%'"
    }
    if($type != null) {
        $type_num = count($type);
        if($type_num==1) {
            $sql.=" AND a.type='A'";
        }
        elseif ($type_num==2) {
            $sql.=" AND a.type='A' AND a.type='B'";
        }
        elseif ($type_num==3) {
            $sql.=" AND a.type='A' AND a.type='B' AND a.type='C'";
        }
        else{
            //
        }
    }
    if($school != null) {
        $sql.=" AND b.name LIKE '%$school%'";
    }
    if($project != null) {
        $sql.=" AND a.name='$project'";
    }
    #Combined string into SQL
    $sql .= " AND a.year='107'";

		//echo "sql = ".$sql;
    $data[$count] = array(
			'school' => $school,
			//'type' => $number['type'],
			'tid'  => $count+1,
			'title' => '計畫名稱：'.$project,
			//'content' => '<p style="color: #81BA5E">計畫摘要：</p><p>$number[\'content\']</p>',
			'link' => "http://google.com"
     );
     print_r($data);
?>

