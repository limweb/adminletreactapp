<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  MemberService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'MemberService';
		}

		public function model(){
			return new Member();
		}

}

$memberservice = new MemberService();
$memberservice->run();
	