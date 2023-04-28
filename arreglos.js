//let autos = new Array('MBW','VOLVO', 'MERCEDES BENZ'); Ya no se usa
const autos = ['BMW','VOLVO', 'MERCEDES BENZ'];
console.log(autos)
    

console.log(autos[1])

for (let i = 0; i <= autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}

autos[1] = 'Ferrari';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

console.log(typeof autos);
console.log(Array.isArray(autos));

console.log(autos instanceof Array);

