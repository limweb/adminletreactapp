<?php
use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version1X;
require_once __DIR__.'/./libs/RestfulServer.php';

class  ClientService extends RestfulServer {
		protected $usedb = false;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			try {
					$o = new stdClass();
					echo 'ClientService';
					$client = new Client(new Version1X($this->socketserver));
					if($client->getEngine()->connect()) {
						echo 'TEST Connect';
						$client->initialize();
						$client->emit('broadcast', ['foo' => 'bar']);
						$client->emit('tlen', ['foo' => 'tlen']);
						$client->close();
						$o->msg = 'Connect Successed.';
						$this->response($o,'json');
					} else {
						throw new Exception("Can not connect to Socket io Server with node js", 1);
					}
			} catch (Exception $e) {
				$this->rest_error(-1,$e->getMessage(),'json',0); //or
			}
		}
}

$clientservice = new ClientService();
$clientservice->run();
// $clientservice->getInstance()->getServerinfo();

