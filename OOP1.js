
var MarkMass = 50;
var Markhight = 2.5;
var johnmass = 55;
var johnhight = 3.8;
var MarkBMI = MarkMass/(Markhight*Markhight);
var johnBMI = johnmass/(johnhight*johnhight);
console.log( MarkBMI, johnBMI)
var higherBMI = MarkBMI>johnBMI;
console.log('is MarkBMI higher than JohnBMI' + higherBMI)
