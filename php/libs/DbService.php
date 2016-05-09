<?php
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\Model as Model;

trait DbService
{

    protected $model      = null;
    protected $modelwhere = [];
	protected $fills =[];  // filed of database table 
    protected $pk = null;

    
    protected function makeModel()
    {
        $this->model = $this->model();
        if ($this->model) {
            $this->pk    = $this->model->getKeyName();
            $this->fills = $this->model->getFillable();
            foreach ($this->modelwhere() as $key => $value) {
                $this->model = $this->model->where($key, $value);
            }
        }
    }
    protected function prepared(&$rs, $input)
    {
        if ((isset($this->fills) & $this->fills) & (isset($input) & $input != new stdClass())) {
            foreach ($this->fills as $field) {
                if (array_key_exists($field, $input)) {
                    $rs->$field = $input->$field;
                }
            }
        }
        //-------------- or -------------------------
        // foreach ($this->input as $key => $value) {
        //     if (in_array($key, $this->fills)) {
        //         $rs->$key = $value;
        //     }
        // }

    }    

    protected function custom_prepared(&$rs, $input,$fills=[])
    {
        foreach ($fills as $field) {
            if (array_key_exists($field, $input)) {
                $rs->$field = $input->$field;
            }
        }
        //-------------- or -------------------------
        // foreach ($this->input as $key => $value) {
        //     if (in_array($key, $this->fills)) {
        //         $rs->$key = $value;
        //     }
        // }

    }

    protected function index()
    {
        try {
            if ($this->model) {
                (!$this->format ? $this->format = 'json' : null);
                $this->response($this->all(), 'json');
            } else {
                throw new Exception('Please define a Model ', -1);
            }
        } catch (Exception $e) {
            $this->rest_error(-1, $e, 'json');
        }
    }

    protected function create()
    {
        try {
            if ($this->model) {
                $rs = $this->Model();
                foreach ($this->fills as $key) {
                    $rs->{$key} = '';
                }
                $o       = new stdClass();
                $o->data = $rs;
                $this->response($o, 'json');
            } else {
                throw new Exception('Please extends method created() ', 1);
            }
        } catch (Exception $e) {
            // $this->rest_error(-1,$e,'json',$e->getCode());
            $this->rest_error(-1, $e->getMessage(), 'json', 0); //or
        }
    }

    protected function store()
    {
        try {
            if ($this->model && $this->fills) {
                $item = $this->model();
                $this->prepared($item, $this->input);
                $rs       = $item->save();
                $o        = new stdClass();
                $o->data  = $rs;
                $o->input = $this->input;
                $this->response($o, 'json');
            } else {
                throw new Exception("please extends function store", 1);
            }
        } catch (Exception $e) {
            // $this->rest_error(-1,$e,'json',$e->getCode());
            $this->rest_error(-1, $e->getMessage(), 'json', 0); //or
        }

    }

    protected function show($id)
    {
        try {
            if ($id == '') {
                throw new Exception("No Id for search", 0);
            }
            if ($this->model) {
                (!$this->format ? $this->format = 'json' : null);
                $this->response($this->find($id), 'json');
            } else {
                throw new Exception('Please assign Model', -1);
            }
        } catch (Exception $e) {
            $this->rest_error(-1, $e, 'json', $e->getCode());
            // $this->rest_error(-1,$e->getMessage(),'json',0); //or
        }
    }

    //get
    protected function edit($id)
    {
        try {
            if ($this->model && $id) {
                $rs       = $this->model->find($id);
                $o        = new stdClass();
                $o->data  = $rs;
                $o->input = $id;
                $this->response($o, 'json');
            } else {
                dump('get edit please extends function edit($id) ');
            }
        } catch (Exception $e) {
            // $this->rest_error(-1,$e,'json',$e->getCode());
            $this->rest_error(-1, $e->getMessage(), 'json', 0); //or
        }
    }

    //put
    protected function update($id)
    {
        try {
            if ($this->model && $id && $this->fills) {
                $item = $this->model->find($id);
                $rs   = false;
                if ($item) {
                    $this->prepared($item, $this->input);
                    $rs = $item->save();
                }
                $o        = new stdClass();
                $o->data  = $rs;
                $o->input = $this->input;
                $this->response($o, 'json');
            } else {
                throw new Exception("put update please extends function update($id)", 1);
            }
        } catch (Exception $e) {
            // $this->rest_error(-1,$e,'json',$e->getCode());
            $this->rest_error(-1, $e->getMessage(), 'json', 0); //or
        }
    }

    protected function destroy($id)
    {
        $this->delete($id);
    }

    //searchs?s={a="aaa",b="bbbb"}
    protected function searchs()
    {
        $model = $this->model();
        $rs    = [];
        if ($model) {
            $arsearch = json_decode($this->reqs['s'], true);
            $i        = 0;
            foreach ($arsearch as $key => $value) {
                if ($i == 0) {
                    $qry = $model->where($key, $value);
                    $i++;
                } else {
                    $qry = $qry->where($key, $value);
                }
            }

            $rs = $qry->get();
            // dump($rs);
            // dump( Capsule::getQueryLog() );
        }

        $o       = new stdClass();
        $o->data = $rs;
        $this->response($o, 'json');
    }

    protected function search_criteria()
    {
        Capsule::enableQuerylog();
        $args = func_get_args();
        $skip = 0;
        $take = 10;
        try {
            if ($this->model) {
                $qry = $this->model();
                if($args[0]){
                    foreach ($args[1] as $key => $value) {
                        if ($key == '__page') {
                            $take = $value[0];
                            $skip = $value[0] * $value[1];
                        } else if ($key == '__select') {
                            $qry = $qry->select($value);
                        } else if ($key == '__result') {

                        } else {
                            if ($key && $value) {
                                $qry = $qry->where($key, $value[0], $value[1]);
                            }
                        }
                    }
                    $total = $qry->count();
                    if ($take > 0) {
                        $rs = $qry->take($take)->skip($skip)->get();
                    } else {
                        $rs = $qry->get();
                    }
                    $o            = new stdClass();
                    $o->data      = $this->model->get();
                    $o->sql       = Capsule::getQueryLog();
                    $o->data      = $rs;
                    $o->param     = $this->input;
                    $o->totalpage = ceil($total / $take);
                    //dump($rs->toArray());
                    $this->response($o, 'json');
                } else {
                    throw new Exception('No agrement', 1);
                    
                }
            } else {
                throw new Exception('Please assign a model ', 1);
            }
        } catch (Exception $e) {
            $this->rest_error(-1, $e, 'json', $e->getCode());
            // $this->rest_error(-1,$e->getMessage(),'json',0); //or
        }
    }

    protected function model()
    {
        return null;
    }

    //-------------------------------------------------------------

    // public function all($columns = array('*'))
    // public function lists($value, $key = null)
    // public function paginate($perPage = 1, $columns = array('*'));
    // public function create(array $data)
    //---- if you use mongodb then you'll need to specify primary key $attribute
    // public function update(array $data, $id, $attribute = "id")
    // public function delete($id)
    // public function find($id, $columns = array('*'))
    // public function findBy($field, $value, $columns = array('*'))
    // public function findAllBy($field, $value, $columns = array('*'))
    // public function findWhere($where, $columns = array('*'))

    /**
     * @param array $columns
     * @return mixed
     */
    protected function all($columns = null)
    {
        $rs = new stdClass();

        if ($this->model) {
            if ($columns && is_array($columns)) {
                $rs->data = $this->model->get($columns);
            } else {
                $rs->data = $this->model->get();
            }
        } else {
            $rs->data = [];
        }

        if (strtolower($this->qrypath) == '/all') {
            $this->response($rs, 'json');
        } else {
            return $rs->data;
        }
    }

    /**
     * @param  string $value
     * @param  string $key
     * @return array
     */
    protected function lists($value, $key = null)
    {
        if ($this->model) {
            $rs = $this->model->lists($value, $key);
        } else {
            $rs = [];
        }
        if (strtolower(explode('/', $this->qrypath)[1]) == 'lists') {
            $this->response($rs, 'json');
        } else {
            return $rs;
        }
    }

    // /**
    //  * @param array $data
    //  * @return mixed
    //  */
    // public function create(array $data) {
    //     return $this->model->create($data);
    // }

    // /**
    //  * @param array $data
    //  * @param $id
    //  * @param string $attribute
    //  * @return mixed
    //  */
    // public function update(array $data, $id, $attribute="id") {
    //     return $this->model->where($attribute, '=', $id)->update($data);
    // }

    // /**
    //  * @param  array  $data
    //  * @param  $id
    //  * @return mixed
    //  */
    // public function updateRich(array $data, $id) {
    //     if (!($model = $this->model->find($id))) {
    //         return false;
    //     }

    //     return $model->fill($data)->save();
    // }

    /**
     * @param $id
     * @return mixed
     */
    protected function delete($id)
    {
        $rs = $this->model->destroy($id);
        if ($rs) {
            $o       = new stdClass();
            $o->data = 'delete successed';
            $o->rs   = 1;
            $this->response($o, 'json');
        } else {
            $this->rest_error(-1, 'Can not delete', 'json');
        }
    }

    /**
     * @param $id
     * @param array $columns
     * @return mixed
     */
    protected function find($id, $columns = array('*'))
    {
        return $this->model->find($id, $columns);
    }

    // /**
    //  * @param $attribute
    //  * @param $value
    //  * @param array $columns
    //  * @return mixed
    //  */
    // public function findBy($attribute, $value, $columns = array('*')) {
    //     return $this->model->where($attribute, '=', $value)->first($columns);
    // }

    protected function modelwhere()
    {
        return [];
    }
}
