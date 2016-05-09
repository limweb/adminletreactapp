<?php
use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version1X;

trait SocketServer
{
    protected $socket = null;
    protected $socketserver = null;
    protected $hasSocket = false;
    // protected $useSocket = false;

    public function setSocketserver($url){
        $this->socketserver = $url;
    }



    public function setConnection($socket=null) {
        consolelog('----set Connect socket----');
        if($this->useSocket) {
                if(!$this->socketserver) {
                     $this->socketserver = $this->host;
                }
                if(!$this->socket){
                    $socket = new Client(new Version1X($this->socketserver));
                    if($socket->getEngine()->connect()) {
                        $socket->initialize();
                        $this->socket = $socket;
                        $this->hasSocket = True;
                        consolelog('socket is set');
                    } else {
                        consolelog('not socket connected');
                    }
                } else  {
                    consolelog('socket is has');
                }
        }
    }

    public function setSocketjs(){
        if($this->hasSocket && $this->useSocket) {
            echo '
            <script src="'.$this->socketserver.'/socket.io/socket.io.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.7/socket.io.js" type="text/javascript"></script>
            <script>
            console.log("--------Start Init---- Socket Io-----");
            var connection = false;
            socket = io.connect("'.$this->socketserver.'");
            window.socket = socket;
            socket.on("connect", function(){
                    console.log("----- socket is connected----");
                    connection = true;
                    socket.emit("connected",true);
           });

           socket.on("disconnect", function () {
                console.log("socket io is disconnected ");
                connection = false;
                socket.emit("connected",false);
           });

           socket.on("talk", function(data) {
                console.log("data on talk",data);
                alert(JSON.stringify(data));
           })

            socket.on("clientlog",function(data){
             console.log("Log:", data);
           })

           </script>';
        }
    }


    public function setSocketStyle(){
        if($this->hasSocket && $this->useSocket) {
          echo ' 
            <!DOCTYPE html>
            <html>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap-theme.min.css">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.css">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css"> 
            <style>
            body  {
                    padding-left: 50px;
                    padding-top: 50px;
            }
            </style>
            ';
        }
    }

    public function setJavascript(){

        if($this->hasSocket && $this->useSocket) {
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.eot
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.svg
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.ttf
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff2
        echo '
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js" type="text/javascript" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.js" type="text/javascript"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js" type="text/javascript"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.7/socket.io.js" type="text/javascript"></script>
        <body>
       
        ';
        
        // https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/npm.js   
        }
    }

    /**
     * Gets the value of socket.
     *
     * @return mixed
     */
    public function getSocket()
    {
        if($this->hasSocket && $this->useSocket) {
            return $this->socket;
        } else {
            return null;
        }
    }

    /**
     * Gets the value of socketserver.
     *
     * @return mixed
     */
    public function getSocketserver()
    {
        if($this->hasSocket && $this->useSocket) {
            return $this->socketserver;
        } else {
            return null;
        }
    }
}