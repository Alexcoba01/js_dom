'use strict';

// puntuaciones
const puntuaciones = [
  {
    equipo: 'Toros Negros',
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: 'Amanecer Dorado',
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: 'Águilas Plateadas',
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: 'Leones Carmesí',
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: 'Rosas Azules',
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: 'Mantis Verdes',
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: 'Ciervos Celestes',
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: 'Pavos Reales Coral',
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: 'Orcas Moradas',
    puntos: [2, 3, 3, 4],
  },
];
//Sacamos array de objetos con los puntos totales de cada cada equipo atras del metodo map y reduce
function majorminorPoints(arra) {
  const totalpoints = arra.map((score) => {
    const { puntos } = score;
    const reducescore = puntos.reduce((acc, puntos) => acc + puntos);
    score.puntos = reducescore;
    return score;
  });

  //creamos una arrow funcion comparadora que usaremos posteriormente para ordenar las puntuaciones, nos ayudamos del metodo sort.

  const calculate = (a, b) => {
    if (a.puntos < b.puntos) {
      return -1;
    }
    if (a.puntos > b.puntos) {
      return 1;
    }
    return 0;
  };
  const orderteam = totalpoints.sort(calculate);

  /*ahora tenemos un listado de equipos ordenados de menor a mayor, necesitamos
    sacar el equipo con menor y mayor puntuacion, para eso utilizaremos
    el metodo slice (corta primero y ultimo) y concat. (concatenar los dos elementos) */
  const team1 = orderteam.slice(0, 1); //Equipo con menos puntos

  const team2 = orderteam.slice(orderteam.length - 1); //Equipo con mas puntos
  const hightlowteam = team2.concat(team1);
  return hightlowteam;
}
console.log(majorminorPoints(puntuaciones));
