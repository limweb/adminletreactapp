<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  TestService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'TestService';
		}

		public function model(){
			return new Member();
		}
}

$testservice = new TestService();
$testservice->run();
