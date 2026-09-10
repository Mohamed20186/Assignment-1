const path = require("node:path");
const fs = require("node:fs");
const EventEmitter = require("node:events");
const filePath = path.resolve(__dirname, "part_one.js");
const txtFilePath = path.resolve(__dirname, "test.txt");
const folderPath = path.resolve(__dirname, "RM", "Mohamed");
const eventEmitter = new EventEmitter();
const startEvent = "start";
const loginEvent = "start";
//1. Write a function that logs the current file path and directory.(0.5)
function fileInfo() {
  console.log("Current file path: ", __filename);
  console.log("Current directory: ", __dirname);
}
//fileInfo();

//2. Write a function that takes a file path and returns its file name.(0.5 Grade)
function getFileName(filePath) {
  path.basename(filePath);
  path.extname(filePath);
  path.dirname(filePath);
  return path.basename(filePath);
}
//console.log("File name: ", getFileName(filePath));

//3. Write a function that builds a path from an object (0.5 Grade)
function buildPath({ basename, extname, dirname }) {
  return path.join(dirname, basename, extname);
}
//console.log("build Path: ", buildPath({basename: "part_one.js", extname: ".js", dirname: __dirname}));

//4. Write a function that returns the file extension from a given file path.(0.5 Grade)
function getFileExtension(filePath) {
  return path.extname(filePath);
}
//console.log("File extension: ", getFileExtension(filePath));

//5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)

function parsePath(filePath) {
  const parsedPath = path.parse(filePath);
  return { name: parsedPath.name, ext: parsedPath.ext };
}
//console.log("Parsed path: ", parsePath(filePath));

//6. Write a function that checks whether a given path is absolute.(0.5 Grade)
function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}
//console.log("Is absolute path: ", isAbsolutePath(filePath));

//7. Write a function that joins multiple segments (0.5 Grade)
function joinmultipleSegments(...segments) {
  return path.join(...arguments);
}
//console.log(joinmultipleSegments("mohamed","ahmed","rx.js"));

//8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
function convertToAbsolutePath(relativePath) {
  return path.resolve(relativePath);
}

// 9. Write a function that joins two paths.(0.5 Grade)
function joinsTwoPaths(firstPath, secondPath) {
  return path.join(firstPath, secondPath);
}

// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
function deletefileByPath(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("error");
      return;
    }
  });
  console.log("file is deleted");
}
//deletefileByPath(txtFilePath);

// 11- Write a function that creates a folder synchronously.(0.5 Grade)
function createFolder(folderPath) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error("error");
      return;
    }
  });
  console.log("success !!");
}
// createFolder(folderPath);
 
// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)

eventEmitter.on(startEvent,()=>{
    console.log("welcome !!"); 
});
//eventEmitter.emit(startEvent);
// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
 
eventEmitter.on(loginEvent,(userName)=>{
   console.log(`welcome ${userName}`); 
})

//eventEmitter.emit(loginEvent,"mohamed");

//14. Read a file synchronously and log its contents.(0.5 Grade)
function readFile(filePath){
    try{
      const content = fs.readFileSync(filePath,"utf8");
      console.log(content)
    }catch (err){
      console.error(err);
    }
}
readFile(txtFilePath);

//15. Write asynchronously to a file.(0.5 Grade)
function writeToFile(filePath,data){
    try{
    fs.appendFileSync(filePath,`\n${data}`,"utf8");
    console.log("Async save");
    }catch(err){
        console.error(err);
    }
}
//writeToFile(txtFilePath,"My name is mohamed ");