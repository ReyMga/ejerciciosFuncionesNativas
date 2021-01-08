/*aHackerSpeak(str)
Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3
*/

const aHackerSpeak = (str) =>{
   let transformOne = str.replace(/i/g,'1').replace(/I/g,'1');
   transformOne=transformOne.replace(/e/g,'3').replace(/E/g,'3');
   transformOne=transformOne.replace(/a/g,'4').replace(/A/g,'4');
   transformOne=transformOne.replace(/s/g,'5').replace(/S/g,'5');
   transformOne=transformOne.replace(/o/g,'0').replace(/O/g,'0');
   return transformOne;
}