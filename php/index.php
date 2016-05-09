<?php
require_once __DIR__.'/config/database.php';
require_once __DIR__.'/libs/RestfulServer.php';

class  TlenService extends RestfulServer {

		// protected $usedb = true;
    /**
     * @param App $app
     * @throws \Bosnadev\Repositories\Exceptions\RepositoryException
     */
	private $app = null;
    public function __construct(Jackpot $app) {
			$this->debug = true;
			$this->app = $app;
			parent::__construct();
		}

		private $appid = 7;
		public function index(){
			dump($this->app);
$html = <<<EOTXT
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js" type="text/javascript"></script>
    <script src="https://fb.me/react-with-addons-0.13.3.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js" type="text/javascript" ></script>
    <script src="http://momentjs.com/downloads/moment.js" type="text/javascript"></script>
    <style>
		pre.sf-dump .sf-dump-str {
		    font-weight: bold;
		    color: #56DB3A;
		}
		pre.sf-dump span {
		    display: inline;
		}
		pre.sf-dump .sf-dump-note {
		    color: #1299DA;
		}
		pre.sf-dump .sf-dump-key {
		    color: #56DB3A;
		}
		pre.sf-dump .sf-dump-protected {
		    color: #FFFFFF;
		}

		pre.sf-dump .sf-dump-public {
		    color: #FFFFFF;
		}


		pre.sf-dump {
		    background-color: #18171B;
		    color: #FF8400;
		    line-height: 1.2em;
		    font: 12px Menlo, Monaco, Consolas, monospace;
		    word-wrap: break-word;
		    white-space: pre-wrap;
		    position: relative;
		    z-index: 100000;
		}
		pre.sf-dump {
		    display: block;
		    white-space: pre;
		    padding: 5px;
		}
</style>
</head>
<body>
<div id="content">
EOTXT;
echo $html;
			echo 'TlenService<br>';
			echo 'it work '.__DIR__;
			$this->app->member = Member::find($this->appid);
			dump('Appid :'.$this->appid);
			$this->app->member->jobs;
			$this->app->member->currentjob->notreceive;
			$this->app->member->paytypes;
			$this->app->member->ownder_members;
			$this->app->member->jms;
			$this->app->member->vips;
			$this->app->member->appconfig;
			if($this->app->member->type == 3 ){
				$jms = Member::where('type',3)->where('status',1)->where('id','!=',$this->app->member->id)->get();
			} else {
				$jms = Member::where('type',3)->where('status',1)->get();
			}
			dump('ข้อมูล member:',$this->app);
			dump('jms:',$jms);
			$this->app->setAppconfig($this->app->member->appconfig);
			dump('isserver:',$this->app->isServer());
			dump('isvip:',$this->app->isVip());
			dump($this->app);
echo 	'</div></body>
		<script type="text/jsx">
		</script>
		</html>';
	}

	public function  getLogin(){
		//----- 1 -------------------------
		if($this->appid == -1 ){
			/*
				1. login  
				2. list of owner  member to select   want Jm  
				3. if not owner  list of all owner to select 
				4. button list of anather jm for select 
			 */		
		} else {
			$this->index();
			/*
				1. is member of this system  y  login and check member of JM (add to this JM )  n register new member
				2. select appinfo to genelerate of from 
			 */
			

		}

	}

}

$app = new Jackpot();
$tlenservice = new TlenService($app);
$tlenservice->run();
	
