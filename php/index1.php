<?php
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/services/RestfulServer.php';

class Indexs extends RestfulServer
{
    public function __construct()
    {
        // $this->socketserver = 'http://192.168.1.104:8888';
        parent::__construct();
    }
    public function __destruct()
    {
        if ($this->socket) {
            $this->socket->close();
        }
    }

    public function getTest(){
        echo 'Test';
    }

    public function index()
    {
        consolelog('---------------index---------------start');
        $this->setStyle();
        $this->setJavascript();
        echo '<script>
                var socket = io.connect("' . $this->socketserver . '");
                socket.emit("register", { username: "user1"});
                socket.on("foo", function(data) {
                    console.log(data);
                });
                socket.on(\'tlen\',function(data){
                    console.log(\'receive tlen data=\',data);
                });
                console.log("socket ok");
                // socket.emit("tlen",{"emit":"tlen", "data":"test from Javascript"});
                function testjs(){
                    console.log("Click test Js");
                    socket.emit("ready","emit test js");
                    // alert("ajax");
                }
        
                function ajax(){
                    console.log("test ajax");
                    $.ajax({
                        url:  \'/index.php/testajax\',
                        type: \'POST\',
                        dataType: "JSON",
                        success: function (data, status)
                        {
                            console.log("successed",data,status);
                        },
                        error: function (xhr, desc, err)
                        {
                            console.log("error",xhr,desc,err);
                        }
                    });
                }
            </script>
            <br/><h2>It work use:</h2><br><br/><hr />
            ' . $this->host . '/serv/YOURAPPID // for direct link <hr />
            &lt;iframe width="560" height="315" src="' . $this->host . '/embed/YOURAPPID" frameborder="0" allowfullscreen&gt;  &lt;/iframe&gt; // for Embed iframe<hr />';
        echo '<button onClick="testjs();" type="">Test Emit from JS</button>&nbsp;&nbsp;&nbsp;';
        echo '<button onClick="ajax();" type="">Test Ajax emit from php backend</button>';
        $this->socket->emit('broadcast', ['foo' => 'bar']);
    }

    public function postPhp()
    {
        $o       = new stdClass();
        $o->data = 'TestPhp';
        $o->emit = 'tlen';
        echo json_encode($o);
        $this->socket->emit('ready', (array) $o);
    }

    public function postTestajax()
    {
        $o          = new stdClass();
        $o->message = 'test ajax successed';
        $json       = json_encode($o);
        echo $json;
        $this->socket->emit('ready', ['foo' => 'bar']);
        // $this->socket->emit('ready',json_decode($json,TRUE));
    }

    // register from
    public function getRegister()
    {
        $this->setStyle();
        $this->setJavascript();
        echo '<div class="container"><div class="row">
                <div class="loginmodal-container">
                <h1>Register</h1><br>
                <form>
                    <input type="text" name="user" placeholder="Username">
                    <input type="password" name="pass" placeholder="Password">
                    <input type="submit" name="login" class="login loginmodal-submit" value="Login">
                </form>
                <div class="login-help">
                    <a href="' . $this->host . $this->server['SCRIPT_NAME'] . '/register">Register</a> - <a href="#">Forgot Password</a>
                </div>
                </div></div></div>';
    }

    //Register service
    public function postRegister()
    {
        echo 'register successed.';
    }

    //login from
    public function getLogin()
    {
        $this->setStyle();
        $this->setJavascript();
        echo '<div class="container"><div class="row">
                    <div class="loginmodal-container">
                        <h1>Login to Your Account</h1><br>
                        <form>
                            <input type="text" name="user" placeholder="Username">
                            <input type="password" name="pass" placeholder="Password">
                            <input type="submit" name="login" class="login loginmodal-submit" value="Login">
                        </form>
                        <div class="login-help">
                            <a href="' . $this->host . $this->server['SCRIPT_NAME'] . '/register">Register</a> - <a href="#">Forgot Password</a>
                        </div>
                    </div></div></div>';
    }
    // login service
    public function postLogin()
    {
        echo 'login successed';
    }
}

$app = new Indexs();
$app->run();
