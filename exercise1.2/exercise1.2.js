import fs from "fs"
import path from "path";
function writeNumbers(){
    let iswritten = true
    for(let i = 1; i<101; i++)
        fs.appendFile(path.join(process.cwd(),"nums.txt"), `${Math.floor((Math.random()*100)+1)}\n`, err => {
            if(err){
                iswritten = false
                console.error(err);
            }
        })
    if(iswritten){
        console.log("Data written!")
    }
}
function readNums(){
    fs.readFile(path.join(process.cwd(),"nums.txt"), "utf-8", (err, data)=>{
        if(err)
            console.log(err)
        else
            console.log(data.split("\n"))
    })
}
writeNumbers()
readNums()