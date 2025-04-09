<?php
$user = $_GET["user"];
$touser = $_GET["touser"];
$numero = rand(0, 100);
$random = rand(0, 2);

$r25 = array(
    "Nomas? Mejor nadota eh.",
    "Oye " . $user . ", pero si le quieres o no?",
    "Y mi celular tiene el " . ++$numero . "% de batería."
);

$r = array(
    "Se tienen en sus corazones… ocupando espacio como una app que no uso pero no quiero borrar.",
    "Con eso se aprende que el amor no es perfecto… pero se puede sobrevivir con un poco de sarcasmo y mucha paciencia.",
    "Eso si es amor! Con intermitencias, lag y señal inestable."
);

$r80 = array(
    "A poco si mucho amor? Nhaaaa.",
    "Encontraron todo lo que buscaban... menos el control remoto, ese sigue perdido.",
    "Oww, no se cambiarían por nada... o, tal vez por una Sub?"
);

$mensaje = "Hay un " . --$numero . "% de amor entre " . $user . " y " . $touser . "... ";
if ($numero == 0){
    $mensaje .= "Emmss... sin comentarios.";
}
if ($numero <= 25 && $numero != 0) {
    $mensaje .= $r25[$random];
}
if ($numero < 80 && $numero > 25) {
    $mensaje .= $r[$random];
}
if ($numero >= 80 && $numero != 100) {
    $mensaje .= $r80[$random];
}
If ($numero == 100){
    $mensaje .= "Ay si, ay si.";
}
echo $mensaje;
?>