<?php
ini_set('display_errors', 1);
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
date_default_timezone_set("Asia/Taipei");
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
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
        $userName= $data['userName'] ?? "";
        $password= $data['password'] ?? "";
        $password2= $data['password2'] ?? "";
        $email= $data['email'] ?? "";
        
        if($userName==""||$password==""||$password2==""||$email==""){
            $result = array(
                "code" => "Error",
                "message" => "not data",
            );
        }else{
            $m = loaddata_row("register_list","WHERE email='". $email ."'");
            if($userName == $m['userName']){
                $result = array(
                    "code" => "Error",
                    "message" => "User exist",
                );
            }elseif($email == $m['email']){
                $result = array(
                    "code" => "Error",
                    "message" => "Email exist",
                );
            }else{
                $sql = "INSERT INTO register_list (userName,password,password2,email) VALUES ('".$userName."','".$password."','".$password2."','".$email."')";
                sql_exe($sql);
                $result = array(
                    "code" => "Ok",
                    "message" => "Register success!",
                );
            }
        }
        break;

        case "check_session":
            $OAUTH = $data['oauth'] ?? "";
            if (!isset($OAUTH)) {
                 $result = array(
                    'code' => 'Error',
                    'message' => 'Oauth session not exist!'
                );
            }else{
                $m = loaddata_row("register_list"," WHERE oauth='".$OAUTH."' ");
                if($m !== false){
                    if ($m === NULL) {
                        $result  = array(
                            'code' => 'Error',
                            'message' => "User not exists or oauth wrong",
                        );
                    } else if ($OAUTH === $m['oauth']) {
                        $result  = array(
                            'code' => 'Ok',
                            'message' => "Login!",
                            'oauth' => $OAUTH,
                            'userName' => $m['userName'],
                            'email' => $m['email'],
                            'class' => $m['class'],
                        );                      
                    } else {
                        $result  = array(
                            'code' => 'Error',
                            'message' => "Oauth wrong",
                        );
                    }                }else{
                    $result = array(
                        'code' => 'Error',
                        'message' => "Data not found",
                    );
                }
               
            };
            break;
    
        
    case "login":
        $email = $data['email'] ?? "";
        $password= $data['password'] ?? "";
        
        if($email==""||$password==""){
            $result = array(
                'code'=>'Error',
                'message'=>'email or password wrong format'
            );
        }else{
            $m = loaddata_row("register_list","WHERE email='". $email ."'");
            if ($m==NULL){
                $result = array(
                    "code" => "Error",
                    "message" => "Email not exist",
                );
            }else{
                if($password === $m['password'] && $email === $m['email']){
                    $oauth = md5(uniqid(mt_srand((double)microtime() * 1000000)));
                    if (isset($_SESSION['sess_Oauth'])) {
						unset($_SESSION['sess_Oauth']);
					}
					$_SESSION['sess_Oauth'] = $oauth;
                    $_SESSION['sess_oauth'] = 'some_value';

                    $sql = "UPDATE register_list SET oauth='".$oauth."',oauth='".$oauth."'
                            WHERE uid='".$m['uid']."' ";
                    sql_exe($sql);
                    w_log("LOGGGINGING_login", json_encode($_SESSION));
                    $result  = array(
                      'code' => 'Ok',
                      'message' => "Login!",
                      'oauth' => $oauth,
                    );
                }else{
                    $result = array(
                      'code' => 'Error',
                      'message' => 'Password Wrong',
                    );
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
