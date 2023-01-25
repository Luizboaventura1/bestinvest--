<?php

    $dbhost = 'LocalHost';
    $dbUsername = 'root';
    $dbPassword = 'servermy%1077';
    $dbname = 'login';

    $conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbname);

    if($conexao -> connect_errno){
        echo 'Erro';
    }
    else {
        echo 'Success';
    }

?>