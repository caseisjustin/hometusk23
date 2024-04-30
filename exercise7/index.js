import process from "process"
import fs from "fs"

// command to RUN ' node index.js simple.txt '

if(process.argv[2] == 'simple.txt'){
    fs.readFile(process.cwd()+"/simple.txt", "utf8", (err, data)=>{
        if(err){
            console.log("Couldn't get file data")
        }else
            console.log(data)
    })
}
else{
    console.log("Couldn't get file name OR file name not provided")
}