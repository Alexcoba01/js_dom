'use strict';

//Se podria hacer de igual manera con un bucle for, opté por el while.

function getPassword() {
  const password = Math.floor(Math.random() * 100) + 1;
  let tries = 4;
  let num = prompt('Introduzca un numero del 0 al 100, tienes 5 intentos');
  while (Number(num) !== password && tries > 0) {
    if (num < password) {
      num = prompt(
        `El número es mayor que el introducido. Inténtelo de nuevo: te quedan ${tries} intentos`
      );
    } else {
      num = prompt(
        `El número es menor que el introducido. Inténtelo de nuevo: te quedan ${tries} intentos`
      );
    }
    tries--;
  }

  if (tries === 0) {
    alert(
      'Has superado el número máximo de intentos. Inténtelo de nuevo en otra ocasión'
    );
  } else {
    alert('Enhorabuena. Ha acertado');
  }
}

getPassword();
