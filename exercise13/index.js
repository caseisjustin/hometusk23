import fs from "fs"


if(fs.existsSync(process.cwd()+"/wrongFilename.txt") && !fs.existsSync(process.cwd()+"/properFilename.md")){
    fs.rename(process.cwd()+"/wrongFilename.txt", process.cwd()+"/properFilename.md", (err)=>{
        if(err){
            console.log("no")
        }
        else{
            console.log("Success!\nFile renamed")
        }
    })
}
else{
    console.log("FS operation failed")
}