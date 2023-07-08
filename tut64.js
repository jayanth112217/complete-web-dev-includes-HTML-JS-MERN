let fs = require("fs");
let text = fs.readFileSync("dele.txt", "ascii");
text = text.replace("backend","Rohan");
console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file");

fs.writeFileSync("dele..txt",text);
