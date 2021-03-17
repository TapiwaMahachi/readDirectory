import httpStatus from 'http-status';
import fs from 'fs';
import  path from 'path';
import Mode from 'stat-mode';




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
            const {mode, birthtime, size} = fs.fstatSync(fs.openSync(fullPath));
            
            return  {
                name: base,
                extension: ext,
                size: size,
                createdAt: birthtime.toLocaleDateString(),
                permission: new Mode(mode).toString(), 
                isDirectory: file.isDirectory(),
                path: fullPath,
                base: dir,
            }           
        });

        res.status(httpStatus.OK).send(updatedFiles);
    }); 
};
