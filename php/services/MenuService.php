<?php
require_once __DIR__.'/../config/database.php';
require_once __DIR__.'/../libs/RestfulServer.php';

class  MenuService extends RestfulServer {
		protected $usedb = true;
		public function __construct() {
			parent::__construct();
		}

		public function index(){
			echo 'MenuService';
		}

		public function model(){
			return new Menu();
		}
}

$menuservice = new MenuService();
$menuservice->run();
