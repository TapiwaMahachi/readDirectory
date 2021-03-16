import httpStatus from 'http-status';
import fs from 'fs';
import path from 'path';


export function dirDetails(req, res ,next){
    let subdir = req.body.subdir;
    let subdir_path="";
    if(subdir)
        subdir_path = path.resolve(subdir)

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
  
            return  {
                name: base,
                extension: ext,
                size: stats.size,
                createdAt: stats.birthtime.toLocaleDateString(),
                permission: stats.mode, 
                isDirectory: stats.isDirectory(),
                path: fullPath,
                base: dir,
            }           
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