// Set and Map are Both ES6 class.

// Set
/*
Sets are a new object type included in ES6
that allow the creation of collections of unique values. 
Syntax:
new Set([iterable]);
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/

let mySet = new Set([1,8,8,2,4,7,11,11,3,3]) 
mySet.add('Hello')   // add "Hello" in Set
mySet.add(2)         // dose not add
mySet.delete(3)      // 3 has been deleted from set

console.log(mySet);
//check member :
console.log(mySet.has(2)); // true
console.log(mySet.has(3)); // false


console.log(mySet.size); // 5

// iterating Set

for(x of mySet){
    console.log(x);
}
 

let iter = mySet.entries() // return SetIterator thats contain key and value.
console.log(iter);
console.log(iter.next());
console.log(iter.next());


for(x of mySet.entries()){
    console.log(x);
}

for([x] of mySet.entries()){
    console.log(x);
}


let iter = [...mySet.keys()];
console.log(iter);

mySet.forEach(element => {
    console.log(element);
    
});








/*========================================================================*/

// Map

/*
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let myMap = new Map(
    [
        ['first key',10],
        ['2nd key','sajjad']

    ]
)
console.log(myMap);
myMap.set('3rd key','hossain')
console.log(myMap);
console.log(myMap.get('2nd key')); // sajjad
console.log(myMap.has('first key')); // true
console.log(myMap.size);  // 3

// Iterate

for([x,y]of myMap){
    console.log(x,y);
}

for(x of myMap.keys()){
    console.log(x);
}

for(x of myMap.values()){
    console.log(x);
}

for(x of myMap.entries()){
    console.log(x);
}

myMap.forEach((x,y) => {
    console.log(x,y);
    
});





// Convert Map to Array

let arr = Array.from(myMap)
console.log(arr);

let arr = Array.from(myMap.keys())
console.log(arr);

let arr = Array.from(myMap.values())
console.log(arr);