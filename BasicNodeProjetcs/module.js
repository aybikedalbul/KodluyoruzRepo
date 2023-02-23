const { readFile, appendFile, unlink, writeFile} = require('fs');

// Create File
appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) =>{
    if(err) console.log(err);
})
//Update File

writeFile('employees.json', '{"name": "Employee 2 name", "salary": 3000}', 'utf8', (err) => {
    if (err) console.log(err);
    else console.log("The file has been updated!");

});

// Read File 
readFile('employees.json', 'utf8', (err,data) =>{
    if(err) console.log(err);
    console.log(data);
})

// Delete File

unlink('employees.json', (err) => {
    if(err) console.log(err);
})



