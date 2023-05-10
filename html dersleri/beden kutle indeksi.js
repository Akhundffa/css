//Beden kutle indeksinin hesablanmasi
// BKI= kilo/ boy*2;

let kilo= Number(prompt("Kilonuzu daxil edin"));
let boy= Number(prompt("Boyunuzu daxil edin"));
console.log("Kilonuz: " +kilo);
console.log("Boyunuz: " +boy);
let kutle= kilo/ (boy*boy);
console.log("Beden kutle indesksiniz: "+kutle);
if(kutle<18.5){
    console.log("Beden kutle indeksiniz idealin altindadir.");
}
else if(18.5 <kutle <24.9){
    console.log("Beden kutle indeksiniz idealdir :)");
}
else if(25 <kutle <29.9){
    console.log("Beden kutle indeksiniz idealin ustundedir.");
}
else if(30 <kutle <39.9){
    console.log("siz obezsiniz :(");
}
else if(kutle>40){
    console.log("Siz morbid obezsiniz, ozubuze diqqet edin.");
}
