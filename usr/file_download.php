<?php
$file = 'http://usr.moe.gov.tw/'.$_GET['file'];
include_once 'connect_mysql.php';
$conn_usr = conn_sql("usr");
$conn_usr->set_charset("utf8");
$get_name="";
if(isset($_GET['p_id'])){
    $sql = "select `name` from `project` where `id`=".$_GET['p_id'];
    $result = $conn_usr->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $get_name = $row['name'];
    }
}    
echo $file;
$new_file = $get_name.'.pdf';

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private",false);
header("Content-Type: application/octet-stream");
header("Content-Disposition: attachment; filename=".urlencode($new_file));
header("Content-Transfer-Encoding: binary");
$fd = fopen($file, "rb");  //大檔案下載的解決方法～readfile($file)會出問題～
if($fd)
{
    ob_end_clean();
    fpassthru($fd);
}
fclose($fd);
?>
