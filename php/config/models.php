<?php
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Menu  extends  Model  { 

        protected  $table='menus';
        protected  $primaryKey='id';
        public $timestamps = true;

        public function children(){
            return $this->hasMany('Menu','parent','id');
        }
}