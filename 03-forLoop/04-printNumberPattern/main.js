
let str=0;
for(let i =1;i<=8;i++) {
    for(let j =1;j<=8;j++){
        if(j<=i) str +=j;
    }
    str += '\n';
}
console.log(str);