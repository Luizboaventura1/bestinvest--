<?php

    $dbHost = 'https://luizboaventura1.github.io/bestinvest--/';
    $dbUsername = 'root';
    $dbPassword = 'servermy%1077';
    $dbName = 'formulario-login';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if($conexao -> connect_errno){
        echo 'Erro';
    }
    else {
        echo 'Success';
    }

?>