//Symbol()
/*The data type symbol is a primitive data type.
The Symbol() function returns a value of type symbol,
has static properties that expose several members of built-in objects,
has static methods that expose the global symbol registry, and resembles a built-in object class,
but is incomplete as a constructor because it does not support the syntax "new Symbol()".
*/
let a = Symbol("Hello")
let b = Symbol("Hello")
console.log(a == b); // false ..... all Symbol() are unique.
let Person = {
    name : "sajjad",
    age : 23,
    [a] : "Hello World"
}
console.log(Person);
console.log(Object.getOwnPropertyNames(Person));
for(x in Person){
    console.log(x);
}







// Using BuiltIn iterator :
let iterable = "Hello";

Symbol.iterator
let iter = iterable[Symbol.iterator]()
for(let i=0;i<iterable.length;i++){
    console.log(iter.next());
}
console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());
console.log("Other Codes");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());






//ternary Operator :
let i = 1;
(i == 1) ?  console.log('True'):console.log('false')







// Custom iterator using custom Symbol :
let names = ['sajjad','zahan','shakib','fahim']

function customIterator(arr){
    let i = -1;
    return {
        next : function(){
            i++;
            return i < arr.length ? { value : arr[i], done : false} : { done : true}
        }
    }
}


let members = customIterator(names)
console.log(members.next());
console.log(members.next());
console.log(members.next());
console.log(members.next());
console.log(members.next());




// Gernerator :

function* genFunc(){
    yield 1;
    yield "sajjad";
    console.log("other Code");
    yield "Hossain";
    yield 4;

}

let iter = genFunc();

console.log(iter);
console.log(iter.next());
console.log(iter.next().value);
console.log(iter.next().value);















