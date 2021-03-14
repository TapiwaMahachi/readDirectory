import httpStatus from 'http-status';
import fs from 'fs';
import path from 'path';


export function dirDetails(req, res ,next){
    let subdir = req.params.subdir;
    let subdir_path="";
    
    if(subdir)
        subdir_path = path.resolve(subdir)
    
    console.log(subdir_path)

    fs.readdir(
        subdir ? subdir_path :
        process.cwd(),
        {withFileTypes: true},
        (err, files)=>{

        if(err)  return next(err);

        const updatedFiles = files.map(file =>{

            //getting file extension name and root directory
            const {base, ext, dir} =  path.parse(path.resolve(file.name));

            //path for the cwd or subdirectory
            const fullPath = path.join(subdir ? subdir_path : dir, base);

            //file status
            const stats = fs.fstatSync(fs.openSync(fullPath));
           
            const isDirectory = stats.isDirectory();
  
            return ext ?
                {
                    fileName: base,
                    extension: ext,
                    fileSize: stats.size,
                    createdAt: stats.birthtime.toLocaleDateString(),
                    filePermission: stats.mode, 
                    isDirectory,
                    fullPath,
                }
                : 
                {
                    subdir: base,
                    isDirectory,
                    fullPath,
                };    
        });

        res.status(httpStatus.OK).send(updatedFiles);
    });   

};

function permission(mode){
    switch(mode){
        default:
            return 'reading only'
    }
}