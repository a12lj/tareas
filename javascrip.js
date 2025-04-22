function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fin = parseInt(document.getElementById('fin').value);
    const resultado = document.getElementById('resultadoPrimos');

    if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
      resultado.textContent = "Por favor, ingresa un rango válido (inicio menor que fin).";
      return;
    }

    const primos = [];
    for (let i = inicio; i <= fin; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }

    if (primos.length === 0) {
      resultado.textContent = `No hay números primos entre ${inicio} y ${fin}.`;
    } else {
      resultado.textContent = `Primos entre ${inicio} y ${fin}: ${primos.join(', ')}`;
    }
  }