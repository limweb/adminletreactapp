<?php
require_once __DIR__.'/../config/database.php';
require_once __DIR__.'/DbService.php';
require_once __DIR__.'/HtmlService.php';
require_once __DIR__.'/Singleton.php';
require_once __DIR__.'/SocketServer.php';
require_once __DIR__.'/Javascript.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\Model as Model;
    //============================= Server Start =======================================


class RestfulServer {

        // config -----
        protected $usedb = false;   // use Eloquent db
        protected $useSocket = false; // Use Socket io with Elephone 
        protected $useJs = false;

        protected $debug = FALSE;   // debuf
        private   $start_time;  // use with debug to save total time

        //----Server var -----------------------------
        protected $host = '/';  
        protected $file = __FILE__;
        protected $server = null;
        protected $method  = null;
        protected $request  = null;
        protected $qrystr     = null;
        protected $input   = null;
        protected $inputarr = [];
        protected $qrypath = null;
        protected $reqs = [];
        protected $uri = [];
        protected $posts = [];
        

        // session & cookie
        protected $sessiones = null;
        protected $cookie = [];
        protected $maxtime = 0;  //mins time of session 0 = no use
        

        
        protected $format = null;  // null  xml
        protected $loginpath = '/index.php';
        protected $useslug = 1;  // 0 not use  1  use slug = permalink  defaultlast() function 

        protected $response = [
        'code' =>0,
        'status' => 404,
        'data' => null,
        ];
        
        //htmluse
        //<h1ml>
        //<htmlhead>
        //<header>
        //<css>
        //<js>
        //<body>
        //<footer>
        //<htmlfooter>
        //not use -----------------------------------------------
        protected $css = '';
        protected $js = '';
        protected $jslast = '';
        protected $navbar = '';
        protected $header = '';
        protected $content = '';
        protected $footer ='';
        protected $htmlhead = '';
        protected $htmlfooter = '</body></html>';
        protected $appopt = '';
        protected $menu = '';
        protected $bladengine='';  // laravel blad template 
        //not use -----------------------------------------------
        
        protected $production = 1;  // 1 dev 0 production  
        
        protected $javascript;  // use with Javascript.php

        protected $backendbase = 'wordpress';  // use with HtmlService login();


        // Define HTTP responses
        protected $http_response_code = [
        200 => 'OK',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        403 => 'Forbidden',
        404 => 'Not Found'
        ];
        // Define whether an HTTPS connection is required
        protected $HTTPS_required = FALSE;
        // Define whether user authentication is required
        protected $authentication_required = FALSE;
        // Define API response codes and their related HTTP response

        protected $api_response_code = [
        0 => ['HTTP Response' => 400, 'Message' => 'Unknown Error'],
        1 => ['HTTP Response' => 200, 'Message' => 'Success'],
        2 => ['HTTP Response' => 403, 'Message' => 'HTTPS Required'],
        3 => ['HTTP Response' => 401, 'Message' => 'Authentication Required'],
        4 => ['HTTP Response' => 401, 'Message' => 'Authentication Failed'],
        5 => ['HTTP Response' => 404, 'Message' => 'Invalid Request'],
        6 => ['HTTP Response' => 400, 'Message' => 'Invalid Response Format'],
        ];

        protected  $methodget = [];
        protected  $methodput = [];
        protected  $methodpost = [];
        protected  $methoddelete = [];
        protected  $reservemethod =[
        'getIndex',
        'getcreate',
        'getShow',
        'getEdit',
        'putUpdate',
        'postStore',
        'deleteDestroy',
        'getRoutes',
        'getAll',
        'postLists'
        ];

        use Singleton;
        use SocketServer;
        use DbService;
        use HtmlService;

        public function __construct() {
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }

            if($this->maxtime > 0 ) {
                if ( time() <  $_SESSION['session_time'] + $this->maxtime){
                    $_SESSION['session_time'] = time();
                }else{
                    session_destroy();
                    session_start();
                    $_SESSION['session_time'] = time();
                }
            }

        // $_SERVER['HTTP_HOST'] = $_SERVER['HTTP_HOST'] ?? '127.0.0.1';
        // $_SERVER['REQUEST_URI'] = $_SERVER['REQUEST_URI'] ?? '/vr-services/MemberService.php/serverinfo';
        // $_SERVER['REQUEST_METHOD'] = $_SERVER['REQUEST_METHOD'] ?? 'GET';

        // $this->host = 'http://'.$_SERVER['HTTP_HOST'];
            $host = 'http://'.$_SERVER['HTTP_HOST'];
            $uri = $_SERVER['REQUEST_URI'];

            $uri = explode("/", substr(@$uri, 1));
            $this->host = $host;
            $this->cookie =  $_COOKIE;
            $this->login();
            if($this->usedb){
                $this->makeModel();
            }
            $this->server = $_SERVER;
            $this->sessiones = $_SESSION;
            $this->posts = $_POST;
            
        // $this->appopt = Appopt::get();
        // $this->menu = Template::where('parent','0')->where('status','1')->orderBy('pageorder','asc')->get();
            $cache = __DIR__.'/cache';
        // $compiler  = new DbBladeCompiler(new \Illuminate\Filesystem\Filesystem(), $cache);
        // $this->bladengine = new \Illuminate\View\Engines\CompilerEngine($compiler);
        // $this->run();
            $this->setConnection();
        }



        public  function __destruct() {
            if($this->debug) {
                $this->format = null;
                dump(Capsule::getQueryLog());
                $mic_time = microtime();
                $mic_time = explode(" ",$mic_time);
                $mic_time = $mic_time[1] + $mic_time[0];
                $endtime = $mic_time;
                $total_execution_time = ($endtime - $this->start_time);
                echo "<br>Total Executaion Time ".$total_execution_time." seconds";
            }
        }

        private  function starttime() {
            $mic_time = microtime();
            $mic_time = explode(" ",$mic_time);
            $mic_time = $mic_time[1] + $mic_time[0];
            $this->start_time = $mic_time;
        }

        public function  getGet(){
            foreach ($this->methodget as $get) {
                $get =(object) $get;
                if(strtolower($get->path) == strtolower($this->request[0])){
                    array_shift($this->request);
                    if($this->request){
                        call_user_func_array([$this,$get->method],$this->request);
                    } else {
                        call_user_func_array([$this,$get->method],[]);
                    }
                    return;
                }
            }
            if($this->useslug) {
                call_user_func_array([$this,'defaultlast'],$this->request);
            }
        }

        public function defaultlast($id=null) {
            try {
                if($this->usedb){
                    if($this->model && $id) {
                        $o = new stdClass();
                        $rs = $this->model->find($id);
                        $o->data = $rs;
                        $o->input = $this->request;
                        $this->response($o,'json');
                    } else {
                        throw new Exception('Please entend this function defaultlast', 1);
                    }
                } else {
                    throw new Exception('Please entend this function defaultlast', 1);
                }

            } catch (Exception $e) {
                // $this->rest_error(-1,$e,'json',$e->getCode());                   
                $this->rest_error(-1,$e->getMessage(),'json',0); //or
            }
        }

        public function run() {
            ( $this->debug ? $this->starttime() : null );
            $this->preser_function();
            if($this->useJs) {
                $this->javascript = new Javascript();
                // $this->javascript->put(['foo'=>'bar']);
            }
            // Set default HTTP response of 'ok'
            $this->method = $_SERVER['REQUEST_METHOD'];
            $this->qrypath = filter_input(INPUT_SERVER, 'PATH_INFO');
            // $this->qrypath = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
            $this->request = filter_input(INPUT_SERVER, 'PATH_INFO');
            $this->request =  rtrim($this->request,"\/");
            $this->request = explode("/", substr(@$this->request, 1));

            $uri = filter_input(INPUT_SERVER,'REQUEST_URI');
            ($uri ? $this->uri = explode("/", substr(@$uri, 1)) : $this->uri = [] );

            $qrystr = filter_input(INPUT_SERVER, 'QUERY_STRING');
            parse_str($qrystr, $this->qrystr);
            $this->input = (object)   json_decode(file_get_contents("php://input"));
            $this->inputarr =  json_decode(file_get_contents("php://input"),TRUE);
            if($this->inputarr == null ) $this->inputarr = [];
            $this->posts = $_POST;
            $this->reqs = $_REQUEST;
            $this->cusheader = headers_list();
            $this->appcheheader = apache_request_headers();
            $this->format = filter_input(INPUT_GET, 'format', FILTER_SANITIZE_SPECIAL_CHARS);
            // ($this->format ? :$this->format='json');
            $func  = filter_input(INPUT_GET, 'method', FILTER_SANITIZE_SPECIAL_CHARS);
            // ($func ? :$func = 'hello');
            // echo 'this class = ',get_class($this),"\n";
            if($this->debug){
                Capsule::enableQuerylog();
            }

            if(  get_class($this) == 'RestfulServer' ) { 
                echo  'Restful Server v.0.0.1',"\n<br>";
                echo  '--------------------------------',"\n<br>";
                echo  '  class   YourService extends RestfulServer  {',"\n<br>";
                echo  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---- you function ----',"\n<br>";
                echo  '  } ',"\n<br>";
                echo  ' $app = new YourService();',"\n<br>";
                echo  ' $app->run()',"\n<br>";
                echo  '--------------------------------',"\n<br>";
            } else  {
                if( $this->request ) {
                    $this->request[] = '';
                }
                switch ($this->method) {
                    case 'GET':
                    if($this->useSocket) {
                        $this->setSocketjs();
                    }
                    
                    $this->getGet();
                    break;
                    case 'PUT':
                    foreach ($this->methodput as $put) {
                        $put =(object) $put;
                        if(strtolower($put->path) == strtolower($this->request[0])){
                            array_shift($this->request);
                            call_user_func_array([$this,$put->method],$this->request);
                            return;
                        }
                    }
                    if($this->request[0]){
                        call_user_func_array([$this,'update'],$this->request);
                        return;
                    } else {
                        $this->rest_error(-1,'Error: '.$this->request[0].' PUT method not found.','');
                    }
                    break;
                    case 'POST':
                    foreach ($this->methodpost as $post) {
                        $post =(object) $post;
                        if(strtolower($post->path) == strtolower($this->request[0])){
                            array_shift($this->request);
                            call_user_func_array([$this,$post->method],$this->request);
                            return;
                        }
                    }
                    $this->rest_error(-1,'Error: '.$this->request[0].' POST method not found.','');
                    break;
                    case 'DELETE':
                    foreach ($this->methoddelete as $delete) {
                        $delete =(object) $delete;
                        if(strtolower($delete->path) == strtolower($this->request[0])){
                            array_shift($this->request);
                            call_user_func_array([$this,$delete->method], $this->request );
                            return;
                        }
                    }
                    if($this->request[0]){
                        $this->destroy($this->request[0]);
                    } else {
                        $this->rest_error(-1,'Error: '.$this->request[0].' DELETE method not found.','');
                    }
                    break;
                    case 'OPTIONS':
                    call_user_func_array([$this,'rest_options'], $this->request );
                    break;
                    default:
                    $err = 'error no method';
                    $this->rest_error(-1,$err);
                    break;
                }
            }
        }


        /**
        * @param  int  $errno 
        * @param  Exception   $err   
        * @param  integer $code  = 0;
        * @param  string  $format json/xml
        * @param  code =  api response code 
        *  0 => 400 Unknown Error
        *  1 => 200 Success
        *  2 => 403 HTTPS Required
        *  3 => 401 Authentication Required
        *  4 => 401 Authentication Failed
        *  5 => 404 Invalid Request
        *  6 => 400 Invalid Response Format
        * @return json/xml
        */
        public function rest_error($errno,$err,$format='json',$code=0){ 
            $o = new stdClass();
            if($err instanceof Exception ){
                $o->errMsg       = $err->getMessage();
                $o->errCode      = $err->getCode();
                $o->Trace        = $err->getTrace();
                $o->TraceString  = $err->getTraceAsString ();
                $this->response['errno'] = $err->getCode();
            } else  {
                $this->response['errno'] = $errno;
                $o->errMsg = $err;
            }
            $this->response['code'] = $code;
            $this->response['status'] = $this->api_response_code[$this->response['code'] ]['HTTP Response'];
            $this->response['data'] = $o;
            $this->deliver_response($format, $this->response);
            return;
        }

        protected function routes() {
            if($this->production){
                $html = '<table width="600" border="1">
                <tr>
                    <th align="center" width ="20">No</th>
                    <th align="center"width ="80">Type</th>
                    <th align="left" width="250">&nbsp;&nbsp;Path</th>
                    <th align="left" width="250">&nbsp;&nbsp;Method</th>
                </tr><tbody>';

                $i = 1;
                foreach ($this->methodget as $method) {
                    $method = (object) $method;
                    $html .=  '<tr><td align="center">'.$i.'</td><td align="center">GET</td><td align="left"><a href="'.$this->server['SCRIPT_NAME'].'/'.$method->path.'">&nbsp;&nbsp;/'.$method->path.'</a></td><td align="left">&nbsp;&nbsp;'.$method->method.'</td></tr>';
                    // $html .=  '<tr><td align="center">'.$i.'</td><td align="center">GET</td><td align="left">&nbsp;&nbsp;/'.$method->path.'</td><td align="left">&nbsp;&nbsp;'.$method->method.'</td></tr>';
                    $i++;
                }
                foreach ($this->methodput as $method) {
                    $method = (object) $method;
                    $html .=  '<tr><td align="center">'.$i.'</td><td align="center">PUT</td><td align="left">&nbsp;&nbsp;/'.$method->path.'</td><td align="left">&nbsp;&nbsp;'.$method->method.'</td></tr>';
                    $i++;
                }
                foreach ($this->methodpost as $method) {
                    $method = (object) $method;
                    $html .=  '<tr><td align="center">'.$i.'</td><td align="center">POST</td><td align="left">&nbsp;&nbsp;/'.$method->path.'</td><td align="left">&nbsp;&nbsp;'.$method->method.'</td></tr>';
                    $i++;
                }
                foreach ($this->methoddelete as $method) {
                    $method = (object) $method;
                    $html .=  '<tr><td align="center">'.$i.'</td><td align="center">DELETE</td><td align="left">&nbsp;&nbsp;/'.$method->path.'</td><td align="left">&nbsp;&nbsp;'.$method->method.'</td></tr>';
                    $i++;
                }
                $html .= '</tbody></table>';
        // echo '<br>';
        // echo '-----------------------'.get_class($this).'----------------------------------<br>';
        // echo  'get =============> ',get_class($this),'.php<br>';
        // echo  'get routes =========> ',get_class($this),'.php/routes  this<br>';
        // echo  'get by id= =========> ',get_class($this),'.php/show/$id<br>';
        // echo  'put =============> ',get_class($this),'.php/$id  & object json<br>';
        // echo  'post ============> ',get_class($this),'.php & object json<br>';
        // echo  'post search =======> ',get_class($this),'.php/search & object json<br>';
        // echo  'delete ===========>',get_class($this),'.php/$id<br>';
        // echo '-----------------------'.get_class($this).'----------------------------------<br>';
                echo $html;
            }
        }

        protected  function deliver_response($format=null, $api_response){
            header('HTTP/1.1 '.$api_response['status'].' '.$this->http_response_code[ $api_response['status'] ]);
        // Process different content types
            if( strcasecmp($format,'json') == 0 ){
        // Set HTTP Response Content Type
                header('Content-Type: application/json; charset=utf-8');
        // Format data into a JSON response
                $json_response = json_encode($api_response,JSON_UNESCAPED_UNICODE);
        // Deliver formatted data
        // error_log($json_response);
                echo $json_response;
            }elseif( strcasecmp($format,'xml') == 0 ){
        // Set HTTP Response Content Type
                header('Content-Type: application/xml; charset=utf-8');
        // Format data into an XML response (This is only good at handling string data, not arrays)
                $xml_response = '<?xml version="1.0" encoding="UTF-8"?>'."\n".
                '<response>'."\n".
                "\t".'<code>'.$api_response['code'].'</code>'."\n".
                "\t".'<data>'.$api_response['data'].'</data>'."\n".
                '</response>';
        // Deliver formatted data
        // error_log($xml_response);
                echo $xml_response;
            }else{
        // Set HTTP Response Content Type (This is only good at handling string data, not arrays)
                header('Content-Type: text/html; charset=utf-8');
        // Deliver formatted data
                dump($api_response);
            }
        // End script process
            exit;
        }

        protected function  response($data,$format=null) {
            $this->response['code'] = 1;
            $this->response['status'] = $this->api_response_code[ $this->response['code'] ]['HTTP Response'];
            $this->response['data'] = $data;
            if($this->debug){
                $this->format = null;
                $format = null;
            } 
            if($format) {
                $this->deliver_response($format, $this->response);
            } else {
                $this->deliver_response($this->format, $this->response);
            }
        }


        private  function  preser_function() {
            $class_methods = get_class_methods(get_class($this));
            foreach ($class_methods as $method) {
                if ( in_array($method,$this->reservemethod) ){
                    $this->rest_error(-9,$method . ' is reserve function.');
                    exit();
                } else {
                    if( preg_split('@(?=[A-Z])@', $method)[0] == 'get' ){
                        $this->methodget[] = [ 'method'=>$method,  'path' => strtolower(explode('get',$method,2)[1])  ];
                    }elseif( preg_split('@(?=[A-Z])@', $method)[0] == 'put' ){
                        $this->methodput[] = ['method'=>$method , 'path'=> strtolower(explode('put',$method,2)[1])  ];
                    }elseif( preg_split('@(?=[A-Z])@', $method)[0] == 'post' ){
                        $this->methodpost[] = ['method'=>$method,'path'=>strtolower(explode('post',$method,2)[1])  ];
                    }elseif( preg_split('@(?=[A-Z])@', $method)[0] == 'delete' ){
                        if($method != 'delete'){
                            $this->methoddelete[] = ['method'=>$method,'path'=>strtolower(explode('delete',$method,2)[1])  ];
                        }
                    }
                }
            }

        $this->methodget[]    = ['method'=>'index','path'=>''];    //index()                /get---- getIndex
        $this->methodget[]    = ['method'=>'phpinfo','path'=>'phpinfo'];    //index()                /get---- getIndex

        if($this->usedb){
            $this->methodget[]    = ['method'=>'show','path'=>'show'];   // show($id)     /show/get----  getShow
            $this->methodget[]    = ['method'=>'create','path'=>'create']; //   create()      /create/get----   getcreate
            $this->methodget[]    = ['method'=>'edit','path'=>'edit'];    //edit($id)           /edit/get---- getEdit
            $this->methodget[]    = ['method'=>'all','path'=>'all'];   
            $this->methodget[]    = ['method'=>'lists','path'=>'lists'];  
            $this->methodget[]    = ['method'=>'searchs','path'=>'searchs'];  
            $this->methodget[]    = ['method'=>'search_criteria','path'=>'search_criteria']; //    store()                 /post--  postStore
            $this->methodput[]    = ['method'=>'update','path'=>'']; //    update($id)        /put--  putUpdate
            $this->methodpost[]   = ['method'=>'store','path'=>'']; //    store()                 /post--  postStore
            $this->methodpost[]   = ['method'=>'search_criteria','path'=>'search_criteria']; //    store()                 /post--  postStore
            $this->methoddelete[] = ['method'=>'destroy','path'=>'']; //    destroy($id)      /delete--  deleteDestroy
        }

        $this->methodget[]    = ['method'=>'routes','path'=>'routes'];    //edit($id)           /edit/get---- getEdit
    }


    public function getVer(){
        if($this->production){
            echo  'Restful Server v.0.0.1',"\n<br>";
        }
    }


    public function rest_options($argv=null) {
                $this->rest_error(-1,'please extends method rest_options()','json',0); //or
            }
            
            public function getServerinfo(){
                if($this->production){
                    dump($this);
                }
            }

            public function phpinfo(){
                echo phpinfo();
            }

        }
    //============================= Server run ======================================================= 
    // $app = new  RestfulServer();
    // $app->run();
    //===================================================================================== end clasee

