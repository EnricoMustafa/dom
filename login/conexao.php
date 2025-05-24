<!-- <?php

$hostname = "localhost";
$database= "alunos";
$user = "root";
$password = "Cyloda123";

$mysqli = new mysqli($hostname,$user,$password,$database);

if($mysqli->connect_errno){
    die("Falha na conexão: " . $mysqli->connect_error);
} 

$primeiraNota = $_POST['nota1'];
$segundaNota = $_POST['nota2'];
$terceiraNota = $_POST['nota3'];

$stmt = $mysqli->prepare("INSERT INTO notas (nota1, nota2, nota3) VALUES (?,?,?)");

$stmt->bind_param("sss", $primeiraNota, $segundaNota, $terceiraNota);

if($stmt->execute()) {
    echo "Usuario cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$mysqli->close();

?> -->