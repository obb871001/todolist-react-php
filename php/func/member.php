<?php
ini_set('display_errors', 1);
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
date_default_timezone_set("Asia/Taipei");
include_once dirname(__FILE__)."/db/db_mysql.php";

function w_log($status,$txt) {
    file_put_contents('log.txt', date('Y-m-d H:i:s') . ' '.$status.': ' . $txt.PHP_EOL,
FILE_APPEND);
}
if (isset($data['method'])) {
    $bodyMsg = json_encode($data);
}else {
    $bodyMsg = file_get_contents('php://input');
}
$params = json_decode($bodyMsg,true);
$method = isset($params['method'])?$params['method']:"-1";


w_log("Request", true);

$data = json_decode($bodyMsg,true);
w_log("json_decode", json_encode($data));

switch($method){
    case "Register":
        $userName= $data['userName'] ?? "-1";
        $password= $data['password'] ?? "-1";
        $password2= $data['password2'] ?? "-1";
        $email= $data['email'] ?? "-1";
        
        if($userName=="-1"||$password=="-1"||$password2=="-1"||$email=="-1"){
            $result['code'] = "Error";
        }else{
            $sql = "INSERT INTO register_list (userName,password,password2,email) VALUES ('".$userName."','".$password."','".$password2."','".$email."') ";
            sql_exe($sql);
        }
        break;
        
    case "login":
        $email = $data['email'] ?? "-1";
        $password= $data['password'] ?? "-1";
        
        if($email=="-1"||$password=="-1"){
            $result = [
                'code'=>'Error',
                'message'=>'email or password wrong format'
            ];
        }else{
            $m = loaddata_row("register_list","WHERE email='". $email ."'");
            if(is_null($m)){
                $result = [
                    "code" => "Error",
                    "message" => "email or password wrong format.",
                ];
            }else{
                if($password ===$m['password']){
                    $oauth = md5(uniqid(mt_srand((double)microtime() * 1000000)));
                    
                    $result  = [
                      'code' => "login!",
                      'oauth' => $oauth,
                    ];
                }
            }
        }
        break;
    default:
        $result['code'] = "Error";
        $result['msg'] = "method error";
        break;
}

// if($data != NULL && $data != ""){
//     $result = array(
//         "code"=>1,
//         "message"=>"success"
//     );
// }else{
//     $result = array(
//         "code"=>2,
//         "message"=>"error"
//     );
// }

w_log("Response",json_encode($result));
echo json_encode($result);


?>
