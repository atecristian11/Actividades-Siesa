// function fibonacci(numero) {
//   let numeros = [0, 1];

//   for (let i = 2; i < numero; i++) {
//     numeros[i] = numeros[i - 2] + numeros[i - 1];
//   }

//   return numeros;
// }

// fibonacci(5);

// function fibonacci(numero) {
//     if (numero == 0 || numero == 1) {
//         return 1;
//     }
//     return fibonacci(numero - 1) + fibonacci(numero - 2) 
// }

// console.log(fibonacci(5));

// function misterio2(x, res=0) {
//     if (x == 0) {
//         return 10;
//     }
//     res += misterio2(x-1, res-1)
//     return misterio2(x-1,res)
// }

// misterio2(5)

//primera actividad

array = ["+", ["*", 2, 6], ["-", ["/", ["+", 12, 23], 7], 2]];

const calcular = (array) => {
  let p = 0;
  let s = 0;
  if (array[1].length > 1) {
    p = calcular(array[1]);
  } else {
    p = array[1];
  }
  if (array[2].length > 1) {
    s = calcular(array[2]);
  } else {
    s = array[2];
  }
  if (array[0] == "+") {
    // console.log(array[0]);
    return p + s;
  } else if (array[0] == "-") {
    // console.log(array[0]);
    return p - s;
  } else if (array[0] == "*") {
    // console.log(array[0]);
    return p * s;
  } else if (array[0] == "/") {
    // console.log(array[0]);
    return p / s;
  }
  console.log();
};

console.log(calcular(array));