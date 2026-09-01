function counter (init) {
    let x = init ; 
    return {
        increment: ()=> x+1,
        decrement : ()=> x-1,
        reset : ()=> x = init, 
    }
};

console.log(counter(5).increment()); 
console.log(counter(5).decrement());
console.log(counter(5).reset()); 

