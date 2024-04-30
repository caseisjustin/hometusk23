import fs from "fs"

if(fs.existsSync(process.cwd()+"/fileToRemove.txt")){
    fs.rm(process.cwd()+"/fileToRemove.txt", (err)=>{
        if(err){
            console.log("helo")
        }
        else{
            console.log("Successfully REMOVED FILE")
        }
    })
}
else{
    console.log("FS operation failed")
}