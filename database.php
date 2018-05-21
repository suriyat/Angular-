<?php 
 class Database{
     private $serverName = "localhost";
     private $username = "root";
     private $password = "root";
     private $dbname = "students";


     private $dbh;
     private $error;
     private $stmt;

public function __construct(){
    $dsn = 'mysql:host='. $this->serverName.';dbname='. $this->dbname;

    $options = array(
        PDO::ATTR_PERSISTENT => true,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );

    try{
        $this->dbh = new PDO($dsn,$this->username,$this->password,$options);
       

    }catch(PDOException $e) {
        $this->error = $e->getMessage();

    }
  }
/*
public function query($query){
    $this->stmt = $this->dbh->prepare($query);
}
public function bind($param,$value,$type=1){
    if(is_null($type)){
        switch(true){
            case is_int($type):
            $type = PDO::PARAM_INT;
            break;
            case is_bool($type):
            $type = PDO::PARAM_BOOL;
            break;
            case is_null($type):
            $type = PDO::PARAM_NULL;
            break;
            default:
            $type = PDO::PARAM_STR;
        }
    }
    $this->stmt->bindValue($param,$value,$type);
}
public function execute(){
    return $this->stmt->execute();
}
public function fetch(){
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);

}
*/
}
?>