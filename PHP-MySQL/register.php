<?php
include("con_db.php");
if($conex){
    echo "todo correcto";
}
else{
    echo "ha ocurrido un error";
}
if(isset($_POST['register'])){

    if(strlen($_POST['name'])>=1 && strlen($_POST['email'])>=1){
        $name   = $_POST['name'];
        $_email = $_POST['email'];
        $data = date("d/m/y");
        $consul = "INSERT INTO datas(name, email, date) VALUES ('$name','$_email','$data')";
        $result = mysqli_query($conex,$consul);

        if($result){
            ?>
            <h3 class="ok">Inscription</h3>
            <?php
        }else{
            ?>
            <h3 class="BAD">Dont successful </h3>
            <?php
        }
        
    }else{

        ?>
        <h3 class="BAD">complete data </h3>
        <?php

    }

}

?>