import httpStatus from 'http-status';
import fs from 'fs';
import path from 'path';

/**
 * 
 * @param {Object} fileDetail unformated file details
 * @returns {Object}  formated file details
 * 
 */
function formatDetails(fileDetail){

    const fullPath = `${fileDetail.dir}/${fileDetail.base}`;
    const fileSize = fileDetail.size;
    const fileName = fileDetail.base;
    const extension = fileDetail.ext;
    const createdAt = fileDetail.createdAt;

    return {
        fullPath,
        fileSize,
        fileName,
        extension,
        createdAt
    };

    
}

export const directory = (req, res ,next) =>{

    fs.readdir(process.cwd(), {withFileTypes: true}, (err, files)=>{
        if(err)  return next(err);

        const updatedFiles = files.map(file =>{
        const absolutePath = path.resolve(file.name);
        const fileDetail =  path.parse(absolutePath);
            
        if(fileDetail.ext){
                
            const sts =  fs.lstatSync(`${fileDetail.dir}/${fileDetail.base}`);

            fileDetail.size = sts.size;
            fileDetail.createdAt = sts.birthtime.toLocaleDateString(); 
            
            return formatDetails(fileDetail);
            
        }else{

            return fileDetail
        }

            
        })

        res.status(httpStatus.OK).send(updatedFiles)
    });   

};