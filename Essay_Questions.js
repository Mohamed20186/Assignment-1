/* 






1-What is the difference between forEach and for...of? When would you use each?
   forEach is a method that is called on an array and takes a callback function as an argument. It iterates over each element in the array and executes the callback function for each element. forEach does not return a value and cannot be used with break or continue statements.
   for...of is a loop that can be used to iterate over any iterable object, such as arrays, strings, and maps. It allows you to use break and continue statements and can be used with the yield keyword in generator functions. for...of returns an iterator object that can be used to access the values of the iterable object.
---------------------------------------------------------------------------------------------------------------------------------------------
2-What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples
   Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. The Temporal Dead Zone (TDZ) is the period between entering a scope and the point where a variable is initialized.
    Example of hoisting:
      console.log(a);
        var a = 5; -----> Output: undefined (due to hoisting)
   
    Example of TDZ:
      console.log(b);
        let b = 10; -----> ReferenceError: Cannot access 'b' before initialization (due to TDZ)
---------------------------------------------------------------------------------------------------------------------------------------------

3-What are the main differences between == and ===?
   == is the equality operator that performs type coercion before comparing values. It converts the operands to the same type before making the comparison.
   === is the strict equality operator that does not perform type coercion. It compares both the value and the type of the operands.
     
---------------------------------------------------------------------------------------------------------------------------------------------
   
4-Explain how try-catch works and why it is important in async operations.
    try-catch is a JavaScript construct that allows you to handle errors in your code. The code inside the try block is executed, and if an error occurs, the control is transferred to the catch block where you can handle the error. This is important in async operations because it allows you to catch and handle errors that may occur during asynchronous operations,  without crashing the entire application.

---------------------------------------------------------------------------------------------------------------------------------------------

5-What’s the difference between type conversion and coercion? Provide examples of each.
    Type conversion is the process of explicitly converting a value from one type to another using built-in functions or methods. For example, using the Number() function to convert a string to a number:
    let str = "123";
    let num = Number(str); 
    Type Coercion is the process of implicitly converting a value from one type to another by the JavaScript engine. For example, when using the + operator with a string and a number:
    let str = "123";
    let num = 456;
    let result = str + num; 





*/