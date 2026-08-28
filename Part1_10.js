function objectDestructuring(obj) {
    let {name , age} = obj;
    return `Name: ${name}, Age: ${age}`;
}

console.log(objectDestructuring({name: "John", age: 30}));
