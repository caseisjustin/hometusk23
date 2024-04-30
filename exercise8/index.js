import fs from "fs"

let data = "Hello World!"
fs.writeFile("./message.txt", data, err =>{
    if(err){
        console.log("Couldn't write data to file")
    }else{
        console.log("Data written to file successfully!")
        console.log("File content: ", fs.readFileSync(process.cwd() +"/message.txt", "utf8"))
    }
})