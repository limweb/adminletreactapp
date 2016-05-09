<?php

trait HtmlService  {
	
	protected function login() {
		if( $this->authentication_required ){
			echo 'require login'; exit();
		}    
        // // var_dump($_SESSION);
        //     if( $this->authentication_required ){
        // // if( empty($_POST['username']) || empty($_POST['password']) ){
        //         if( empty($_SESSION['user'])){
        //             $this->response['code'] = 3;
        //             $this->response['status'] = $this->api_response_code[ $this->response['code'] ]['HTTP Response'];
        //             $this->response['data'] = $this->api_response_code[ $this->response['code'] ]['Message'];
        // // Return Response to browser
        // // $this->deliver_response($this->format, $this->response);
        //             $path =$this->host.$this->loginpath;
        // // echo 'path=',$path;
        //             header('location: '.$path);
        //             exit(0);
        //         }
        // // Return an error response if user fails authentication. This is a very simplistic example
        // // that should be modified for security in a production environment
        // // elseif( $_POST['username'] != 'foo' && $_POST['password'] != 'bar' ){
        // //     $this->response['code'] = 4;
        // //     $this->response['status'] = $this->api_response_code[ $this->response['code'] ]['HTTP Response'];
        // //     $this->response['data'] = $this->api_response_code[ $this->response['code'] ]['Message'];
        // //     // Return Response to browser
        // //     $this->deliver_response($this->format, $this->response);
        // // }
        //         else {
        // // $this->response['code'] = 1;
        // // $this->response['status'] = $this->api_response_code[ $this->response['code'] ]['HTTP Response'];
        // // $this->response['data'] = $this->api_response_code[ $this->response['code'] ]['Message'];
        // // // Return Response to browser
        // // $this->deliver_response($this->format, $this->response);
        //             return TRUE;
        //         }

        //     }

            // $chk = FALSE;
            // if($this->backendbase == 'wordpress' && $this->authentication_required ) {
            //         foreach($_COOKIE as $key => $value) {
            //           if(substr($key, 0, 20) == 'wordpress_logged_in_') {
            //             $chk = TRUE;
            //           }
            //         } 
            // }

            // $path = $this->host.$this->loginpath;
            // if(!$chk) {
            //     header('location: '.$path);
            //     exit(0);
            // }
	} 

}