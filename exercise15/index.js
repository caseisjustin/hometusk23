import fs from "fs"


let path = "/files"
console.log(fs.existsSync(process.cwd()+path))
if(fs.existsSync(process.cwd()+path)){
    fs.readdir(process.cwd()+path, (err, data)=>{
        if(err){
            console.log("error")
        }
        else{
            console.log(data)
        }
    })
}
else{
    console.log("FS operation failed!")
}