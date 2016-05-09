<?php

class Jackpot
{

	private $propertys = [];

	public function __get($property)
	{
	  if (array_key_exists($property,$this->propertys)) {
	  	 return $this->propertys[$property];
	  } else {
	  	return  null;
	  }

	}

	public function __set($property, $value)
	{
       $this->propertys[$property] = $value;
	}

    public function __tostring()
    {
        return 'toString';
    }

    public function __invoke()
    {
        echo 'test';
    }

    public function __call($method, $parameters)
    {
		if ( strpos($method, 'is') === 0) {
			$param = [str_replace("is","",$method)];
			return call_user_func_array([$this,'chkIs'],$param);
		} else {

		}

        // if (in_array($method, array('retweet', 'favourite'))) {
        //     return call_user_func_array(array($this, $method), $parameters);
        // }
    }


	private $appconfig = [];
    
    public function setAppconfig($appcfg) {
    	$this->appconfig = $appcfg;
    }

    private function chkIs()
    {
        $chk = 0;
        $args = func_get_args();
        foreach ($this->appconfig as $item) {
        	if(strtolower($item->desc) == strtolower($args[0])){
        		$chk = 1;
        	}
        }
        return $chk;
    }

}

$j = new Jackpot();
// echo $j;
// $j();
// // echo $j->test('test');
// $j->text = 'aaaaaa10';
// echo $j->text;
// echo $j->isTest1();