<?php
    
namespace App\Entity;

class ValidationHelper {

    /**
    * PHP VAlidations helper
     * @var array $patterns
     */
    public $patterns = array(
        'uri'           => '[A-Za-z0-9-\/_?&=]+',
        'url'           => '[A-Za-z0-9-:.\/_?&=#]+',
        'alpha'         => '[\p{L}]+',
        'words'         => '[\p{L}\s]+',
        'alphanum'      => '[\p{L}0-9]+',
        'int'           => '[0-9]+',
        'float'         => '[0-9\.,]+',
        'tel'           => '[0-9+\s()-]+',
        'text'          => '[\p{L}0-9\s-.,;:!"%&()?+\'°#\/@]+',
        'file'          => '[\p{L}\s0-9-_!%&()=\[\]#@,.;+]+\.[A-Za-z0-9]{2,4}',
        'folder'        => '[\p{L}\s0-9-_!%&()=\[\]#@,.;+]+',
        'address'       => '[\p{L}0-9\s.,()°-]+',
        'date_dmy'      => '[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{4}',
        'date_ymd'      => '[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}',
        'email'         => '[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+[.]+[a-z-A-Z]'
    );
        
    /**
     * @var array $errors
     */
    public $errors = array();
    
    /**
     * @param string $name
     * @return this
     */
    public function name($name)
    {
        $this->name = $name;
        return $this;
    }
        
    /**
     * @param mixed $value
     * @return this
     */
    public function value($value)
    {
        $this->value = $value;
        return $this;
    }
        
        
    /**
     * 
     * @param string $name nome del pattern
     * @return this
     */
    public function pattern($name)
    {
        if($name == 'array'){
            if(!is_array($this->value)){
                $this->errors[$this->name] = 'The field '.$this->name.' is not valid.';
            }
        }else{
            $regex = '/^('.$this->patterns[$name].')$/u';
            if($this->value != '' && !preg_match($regex, $this->value)){
                $this->errors[$this->name] = 'The field '.$this->name.' is not valid.';
            }
        }
        return $this;
    }

    /**
     * 
     * @param string $email
     * @return this
     */
    
    public function email() 
    {
        $email = filter_var($this->value, FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->errors["email"] = 'Invalid Email address.';
        }
        return $this;
    }

    /**
     * 
     * @param string $password
     * @return this
     */
    public function password()
    {
        $regex = '/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/';
        if($this->value != '' && !preg_match($regex, $this->value)){
            $this->errors["password"] = 'Please enter secure and strong password.';
        }
        return $this;
    }

    /**
     * 
     * @param string $pattern
     * @return this
     */
    public function customPattern($pattern)
    {
        $regex = '/^('.$pattern.')$/u';
        if($this->value != '' && !preg_match($regex, $this->value)){
            $this->errors[$this->name] = 'The field '.$this->name.' is not valid.';
        }
        return $this;
    }
        
    /**
     * 
     * @return this
     */
    public function required()
    {
        if((isset($this->file) && $this->file['error'] == 4) || ($this->value == '' || $this->value == null)){
            $this->errors[$this->name] = 'The field '.$this->name.' is required.';
        }            
        return $this;
    }
        
    /**
     * 
     * @param int $min
     * @return this
     */
    public function min($length)
    {
        if(is_string($this->value)){
            
            if(strlen($this->value) < $length){
                $this->errors[$this->name] = 'The field '.$this->name.' is lower than the minimum value';
            }
            }else{
            if($this->value < $length){
                $this->errors[$this->name] = 'The field '.$this->name.' is lower than the minimum value';
            }
        }
        return $this;
    }
            
    /**
     * 
     * @param int $max
     * @return this
     */
    public function max($length)
    {
    if(is_string($this->value))
    {
        if(strlen($this->value) > $length){
            $this->errors[$this->name] = 'The field '.$this->name.' is greater than the maximum value';
        }
    } else {
            if($this->value > $length){
                $this->errors[$this->name] = 'The field '.$this->name.' is greater than the maximum value';
            }
            
        }
        return $this;   
    }
        
    /**
     * 
     * @param mixed $value
     * @return this
     */
    public function equal($value)
    {
        if($this->value != $value){
            $this->errors[$this->name] = 'The field '.$this->name.' doesn\'t match.';
        }
        return $this;
    }
    
    /**
     * 
     * @return boolean
     */
    public function isValid()
    {
        if(empty($this->errors)) return true;
    }
        
    /**
     * 
     * @return array $this->errors
     */
    public function getErrors()
    {
        if(!$this->isValid()) return $this->errors;
    }
        
    /**
     * 
     * @return string $html
     */
    public function displayErrors()
    {
        $html = '<ul>';
            foreach($this->getErrors() as $error){
                $html .= '<li>'.$error.'</li>';
            }
        $html .= '</ul>';
        
        return $html;
    }
        
    /**
     *
     * @return booelan|string
     */
    public function result(){
        
        if(!$this->isValid()){
            
            foreach($this->getErrors() as $error){
                echo "$error\n";
            }
            exit;
            
        }else{
            return true;
        }
    
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_int($value){
        if(filter_var($value, FILTER_VALIDATE_INT)) return true;
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_float($value){
        if(filter_var($value, FILTER_VALIDATE_FLOAT)) return true;
    }
        
    /**
     * @param mixed $value
     * @return boolean
     */
    public static function is_alpha($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[a-zA-Z]+$/")))) return true;
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_alphanum($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[a-zA-Z0-9]+$/")))) return true;
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_url($value){
        if(filter_var($value, FILTER_VALIDATE_URL)) return true;
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_uri($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[A-Za-z0-9-\/_]+$/")))) return true;
    }
        
    /**
     * @param mixed $value
     * @return boolean
     */
    public static function is_bool($value){
        if(is_bool(filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE))) return true;
    }
        
    /**
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_email($value){
        if(filter_var($value, FILTER_VALIDATE_EMAIL)) return true;
    }
        
}