import httpStatus from 'http-status';
import fs from 'fs';


export const directory = (req, res ,next) =>{

      fs.readdir(process.cwd(), (err, files)=>{
          if(err)  return next(err);
          res.status(httpStatus.OK).send(files)
      });   

};