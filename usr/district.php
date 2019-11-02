<?php
    #database connection
    $db_host = "127.0.0.1";
    $db_user = "";
    $db_pass = "";
    $db_select = "usr";
    //$dbconnect = 'mysql:host='.$db_host.';dbname='.$db_select;
    $dbgo = new mysqli($db_host,$db_user,$db_pass,$db_select);
    if($dbgo->connect_errno){
        echo "Failed to connect to MYSQL:(".$dbgo->connect_errno.")".$dbgo->connect_error;
    }

    #Confirm coding consistency
    $insert = $dbgo->query("SET NAMES 'utf8'");

    #get input data
    $country = preg_replace("/[\'\"]+/" , '' ,$_POST['country']);
    $district = preg_replace("/[\'\"]+/" , '' ,$_POST['district']);
    $type = $_POST['topic']; //this is an array
    $school = preg_replace("/[\'\"]+/" , '' ,$_POST['school']);
    $project = preg_replace("/[\'\"]+/" , '' ,$_POST['project']);

    #php functions
    function tid($num){
        if($num=='A') {
            $tid_number=1;
        }
        elseif ($num=='B') {
            $tid_number=2;
        }
        elseif ($num=='C') {
            $tid_number=3;
        }
        return $tid_number;
    }
    #php variable
    $data = array();
    $count=0;
    $sql = "SELECT a.id as 'p_id',f.name as 'pj_contact', f.job_title as 'pj_job', f.phone as 'pj_phone', f.email as 'pj_email', b.name as 'project', a.abstract as 'content', a.name, a.type, c.city, c.district, b.slug as 's_slug', a.no as 'num', f.class FROM project a,school b, fields c, reversion_project_field_relation d, reversion_project_member_relation e, members f WHERE a.school_id=b.id AND a.id=d.reversion_project_id AND d.field_id=c.id AND a.id=e.reversion_project_id AND e.member_id=f.id AND (f.class=1 OR f.class=3)";

    #Search result from the database
    if($country != null) {
        $sql .= " AND c.city='$country'";
        if($district != null)
            $sql .= " AND c.district='$district'";
    }
    if($type != null) {
        $type_num = count($type);
        if($type_num==1) {
	    $type0 = preg_replace("/[\'\"]+/" , '' ,$type[0]);
            $sql.=" AND a.type='$type0'";
        }
        elseif ($type_num==2) {
	    $type0 = preg_replace("/[\'\"]+/" , '' ,$type[0]);
	    $type1 = preg_replace("/[\'\"]+/" , '' ,$type[1]);
            $sql.=" AND(a.type='$type0' OR a.type='$type1')";
        }
        elseif ($type_num==3) {
            $type0 = preg_replace("/[\'\"]+/" , '' ,$type[0]);
            $type1 = preg_replace("/[\'\"]+/" , '' ,$type[1]);
            $type2 = preg_replace("/[\'\"]+/" , '' ,$type[2]);
            $sql.=" AND (a.type='$type0' OR a.type='$type1' OR a.type='$type2')";
        }
        else{
            //
        }
    }
    if($school != null) {
        $sql.=" AND b.name LIKE '%$school%'";
    }
    if($project != null) {
        $sql.=" AND a.name LIKE '%$project%'";
    }
    $sql .= " AND a.year='107' GROUP by name, class ORDER BY p_id";

    $insert = $dbgo->query($sql);
    while($NUM = $insert->fetch_array()) {
        if($count%2==0) {
            $host = $NUM['pj_contact'];
        }
        elseif($count%2==1){
            $tid_number = tid($NUM['type']);
            $data[] = array(
                'aschool' => $NUM['project'],
                'type' => $NUM['type'],
                'tid' => $tid_number,
                'title' => '計畫名稱：' . $NUM['name'],
                'content' => '<p style="color: #81BA5E">計畫摘要：</p><p>' . $NUM['content'] . '</p>',
                'link' => 'file_download.php?p_id='.$NUM['p_id'].'&file=/Upload/PublicInfo/108/108-'.$NUM['s_slug'].'-'.strtolower($NUM['type']).$NUM['num'].'.pdf',
                //
                'pj_host' => $host,
                'pj_contact' => $NUM['pj_contact'],
                'pj_job' => $NUM['pj_job'],
                'pj_phone' => $NUM['pj_phone'],
                'pj_email' => $NUM['pj_email'],
            );
        }
        $count+=1;
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
?>
