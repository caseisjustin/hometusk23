import fs from "fs"
import path from "path";
function readhello(){
    fs.readFile(path.join(process.cwd() + "/UYVAZIFALAR/hometusk23/exercise3/my_nodejs_files", "hello_world.txt"), "utf-8", (err, data) => {
        if(err)
            console.log(err)
        else
            console.log(data)
    })
}
function writedate(){
    fs.appendFile(path.join(process.cwd() + "/UYVAZIFALAR/hometusk23/exercise3/my_nodejs_files", "hello_world.txt"), (`\n${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`), err =>{
        if(err){
            console.log(err)
        }
    })
}
readhello()
writedate()

