import httpStatus from 'http-status';
import fs from 'fs';
import path from 'path';


export const fileDetails = (req, res ,next) =>{

    fs.readdir(process.cwd(), {withFileTypes: true}, (err, files)=>{

        if(err)  return next(err);

        const updatedFiles = files.map(file =>{

            const {base, ext, dir} =  path.parse(path.resolve(file.name));
            const fullPath = `${dir}\\${base}`; 
            const stats = fs.fstatSync(fs.openSync(fullPath,'r'));
           
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
                    directory: base,
                    isDirectory,
                    fullPath,
                };    
        });

        res.status(httpStatus.OK).send(updatedFiles);
    });   

};