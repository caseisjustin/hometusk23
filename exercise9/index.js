import fs from "fs"

let data = "Hello World!\n"
fs.appendFile(process.cwd()+"/message.txt", data, err => {
    if(err)
        console.log("An error occured!")
    else
        console.log("Data written successfully!")
})