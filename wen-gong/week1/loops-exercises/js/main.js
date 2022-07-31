// console.log(`Loops!`);

  
    for (let i = 0; i <=20; i++) {
        if (i % 2 === 1){
         console.log(i + " is even ")
        }else{
            console.log(i + " is odd")
        }

}


for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * 9 = ${i*9}`);
// }
console.log(`outer loop i;`, i);


for (let j = 0; j <= 10; j++){
    if( (i * j) % 10 === 0){
        console.log(`%c${i} * ${j} = ${i * j}`, `font-size: 14pt; font-weight: bold; color: hotpink`);

    }else{
    console.log(`${1} * ${j} = ${ i * j}`);
}
}
}


const assignGrade = function( numberScore){

    if (numberScore >= 90){
        return `A`;
    }else if( numberScore >=80) {
        return `B`;
    }else if( numberScore >=70){
        return `C`;
    }else if(numberScore >=60){
        return `D`;
    }else{
        return `F`;
    }
};
// console.log(95, assignGrade(95));
// console.log(80, assignGrade(80));
// console.log(55, assignGrade(55));



for( let i = 50; i <= 100; i++){
console.log(i, assignGrade(i));

}