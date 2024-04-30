import fs from "fs"

fs.readFile(process.cwd()+"/fresh.txt", "utf8", (err, data) => {
    if(err){
        fs.writeFile(process.cwd()+"/fresh.txt", "I am fresh and young", err => {
            if(err){
                console.log("couldn't write to file")
            }
            else{
                console.log("file in directory: ", process.cwd(), "CREATED")
            }
        })
    }
    else{
        console.log("File already exists with content: ", data)
        console.log("FS operation failed!")
    }
})