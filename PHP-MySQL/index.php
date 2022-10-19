<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta rel="stylesheet" type="text/css" href = "styles.css">
    
    <title>Crud PHP</title>
</head>
<body>
    <form method="post">
        <h1>Interfaz de usuario</h1>
        <input type="text" name="name" placeholder="Nombre de usuario">
        <input type="email" name="email" placeholder="Email" >
        <input type="submit" name="register">
    </form>
    
    <?php
        include("register.php");
    ?>
</body>
</html>