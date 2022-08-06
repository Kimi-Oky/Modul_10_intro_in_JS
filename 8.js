let myMap = new Map();
myMap.set('вода', 'мокрая');
myMap.set('вата', 'сладкая');
myMap.set('рыба', 'в пруду');

for (let [key, value] of myMap){
  
  console.log(`ключ - ${key}, значение - ${value}`)
}
