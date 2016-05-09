<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  NotrecService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'NotrecService';
		}

		public function model(){
			return new Notreceive();
		}
}

$notrecservice = new NotrecService();
$notrecservice->run();
