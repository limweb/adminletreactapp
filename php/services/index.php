<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  IndexService extends RestfulServer {
		protected $usedb = false;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'It work '.__DIR__;
			echo 'IndexService';
			consolelog('--------------------------- test index----------------------------------------');
			dump($this);
		}
}

$service = new IndexService();
$service->run();
