import fs from "fs"

fs.readdir(process.cwd(), {withFileTypes: true}, (err, data)=>{
    if(err)
        console.log("An error occured")
    else
    console.log("all files in current directory: -\n\t\t\t\t|\n\t\t\t\t|\n-------------------------------\n|\n↓")
    data.forEach(i => {
        console.log(i.name)
    });
})