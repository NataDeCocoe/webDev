<?php
require_once 'BaseController.php';
class AuthController extends BaseController{

    public function showLoginForm(){
        if($this->Authenticated()){
            $this->redirect('/');
        }
        $this->views('auth/login');;
    }
    public function showRegisterForm(){
        $this->views('auth/register');
    }
}


?>