
console.log("--------------[Day 4 exercises level 2]-------------------")

//3
let market=['konfet','Coffee','Cay','Bal']
market.unshift("Et");
console.log(market.unshift)

//4
let olkeler=['Azerbaycan','Turkiye','Madagasgar', 'Iran']
if(olkeler.includes('Ethiopia')){
    console.log('Bu olke siyahida var')
    console.log('ETHIOPIA')
}
else{
    olkeler.unshift("Ethiopia")
}

//5
let ad=['Sass','Console','Input','Let']
if(ad.includes('Sass')){
    console.log('Sass is a CSS preprocessor')
}
else{
    console.log('Bu soz yoxudr')
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd + backEnd;
console.log( fullStack)
