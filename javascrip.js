function promedioNotas() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nota5 = parseFloat(document.getElementById("nota5").value);

    if (
        nota1 > 0 && nota1 <= 10 &&
        nota2 > 0 && nota2 <= 10 &&
        nota3 > 0 && nota3 <= 10 &&
        nota4 > 0 && nota4 <= 10 &&
        nota5 > 0 && nota5 <= 10
    ) {
        var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

        if (promedio >= 7) {
            document.getElementById("resultado").textContent = "Tu promedio es " + promedio + ", por lo tanto, pasaste el semestre. ¡Felicidades :)!";
        } else if (promedio >= 3.5 && promedio < 7) {
            document.getElementById("resultado").textContent = "Tu promedio es " + promedio + ", por lo tanto, estás suspendido :(";
        } else {
            document.getElementById("resultado").textContent = "Tu promedio es " + promedio + ", por lo tanto, perdiste el semestre >:(";
        }

    } else {
        document.getElementById("resultado").textContent = "Por favor ingrese números válidos. Las notas deben estar entre 1 y 10 (sin incluir el 0)";
        console.warn("⚠ Nota inválida detectada: alguna es menor o igual a 0 o mayor a 10.");
    }
    

}
