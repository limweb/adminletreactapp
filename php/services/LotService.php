<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  LotService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'LotService';
		}

		public function model(){
			return new Lot();
		}
}

$lotservice = new LotService();
$lotservice->run();
