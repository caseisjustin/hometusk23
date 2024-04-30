import fs from "fs"
import path from "path";

console.log(fs.existsSync(process.cwd()+"/files"))
if(fs.existsSync(process.cwd()+"/files") && !fs.existsSync(process.cwd()+"/files_copy")){
    try{
        fs.mkdirSync(process.cwd()+"/files_copy")
        fs.readdirSync(process.cwd()+"/files").forEach(elem => {
            try{
                let data = fs.readFileSync(process.cwd()+"/files/"+elem, {encoding: 'utf8'})
                fs.writeFileSync(path.join(process.cwd(), "/files_copy/", elem), data)
            }catch(err){
                console.log("No data in file")
            }
        });
    }
    catch(err){
        console.log("FS operation failed")
    }
}
else{
    console.log("FS operation failed no such directory '/files'")
}