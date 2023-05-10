//document.write("Hello World <br>");
//document.write("Djan, hə. JS öyrənirəmm");
//let a=3;
//let b=5;
//console.log("Hello World");
//console.log(a+b);
//console.log("Cem=" + (a+b));
//alert("Salam menim qozal dostlarim");

/*alert("Get dersini oxu, bos bos vaxtini itirme!");
let melumat= prompt("Adinizi daxil edin:");
console.log(melumat);
*/

/*let ad= prompt("Adinizi daxil edin:");
let yas= prompt("Yasinizi daxil edin:");
console.log("Adiniz:" +ad);
console.log("Yasiniz:" +yas);
console.log(typeof yas);
*/

/*let netice= confirm("Silmek istediyinizden eminmisiniz?");
console.log(netice);
*/

//beden kutle indeksinin tapilmasi
let kilo = Number(prompt("Kilonuzu daxil edin"));
let boy = Number(prompt("Boyunuzu daxil edin"));
console.log("Kilonuz: " + kilo);
console.log("Boyunuz: " + boy);
let kutle = kilo / (boy * boy);
console.log("Beden kutle indesksiniz: " + kutle);
if (kutle < 18.5) {
    console.log("Beden kutle indeksiniz idealin altindadir.");
}
else if (18.5 < kutle < 24.9) {
    console.log("Beden kutle indeksiniz idealdir :)");
}
else if (25 < kutle < 29.9) {
    console.log("Beden kutle indeksiniz idealin ustundedir.");
}
else if (30 < kutle < 39.9) {
    console.log("siz obezsiniz :(");
}
else if (kutle > 40) {
    console.log("Siz morbid obezsiniz, ozubuze diqqet edin.");
}
