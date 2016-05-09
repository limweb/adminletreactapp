<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  JobService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'JobService';
		}

		public function model(){
			return new Job();
		}
}

$jobservice = new JobService();
$jobservice->run();
