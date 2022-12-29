// for in loop me index print ho jayega array ka
const fruits = ["apple","mango","graphes","fruits4"]
fruits2 = []
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2)