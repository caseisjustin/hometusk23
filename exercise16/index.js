import fs from "fs"

let filepath = "/fileToRead.txt"
if(fs.existsSync(process.cwd()+filepath)){
    fs.readFile(process.cwd()+filepath, {encoding: "utf8"}, (err, data)=>{
        if(err){
            console.log("An error occured")
        }
        else{
            console.log(data)
        }
    })
}
else{
    console.log("FS operation failed!")
}