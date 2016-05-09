<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  PaytypeService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'PaytypeService';
		}

		public function model(){
			return new Paytype();
		}
}

$paytypeservice = new PaytypeService();
$paytypeservice->run();
