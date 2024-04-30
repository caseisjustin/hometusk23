import path from "path"
import fs from "fs"

console.log(process.cwd())
fs.access("./docs", error => {
    if(error){
        fs.mkdir("./docs", err => {
            if(err){
                console.log(err)
            }
            else{
                console.log("Created successfully!")
                console.log(path.join("./docs","./readme.md"))
                fs.writeFile(path.join("./docs","./readme.md"), `Hello world`, err => {
                    if(err){
                        console.error(err);
                    }
                })
            }
        });
    }
    else{
        console.log("Dir already exists")
        console.log(path.join("./docs","./readme.md"))
        fs.writeFile(path.join("./docs","./readme.md"), `Hello world`, err => {
            if(err){
                console.error(err);
            }
        })
    }
})