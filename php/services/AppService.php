<?php
require_once __DIR__.'/../libs/RestfulServer.php';

class  AppService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			$this->getAppinfo(7);
		}

        public function getAppinfo($member_id) {
        	try {
        		$o = new stdClass();
        		$o->member = Member::find($member_id);
	            $o->appconfig = $o->member->appconfig;
	            $o->jobs = $o->member->jobs;
	            $o->currentjob = $o->member->currentjob;
	            $o->notreceives = $o->member->currentjob->notreceive;
	            $o->paytypes = $o->member->paytypes;
	            $o->owners = $o->member->owners;

	            echo json_encode($o);

        		// $this->response($o);
        	} catch (Exception $e) {
        		$this->rest_error(-1,$e->getMessage(),'json',0); //or
        	}
        }


		public function model(){
			return new App();
		}
}

$appservice = new AppService();
$appservice->run();
