import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {Dirent} from '../models/Dirent';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class DirentService {

  direntUrl:string = '/api/directory';
 
  constructor(private http:HttpClient) { }

  //get root directory 
  getDirent():Observable<Dirent[]>{
    return this.http.get<Dirent []>(this.direntUrl);
    
  }

  //get subfolder contents
  getSubfolder(dirent):Observable<any>{
    const path = dirent.path;
    //removing the  main directory path
    const subdir:string = path.slice(dirent.base.length + 1);
    
    return this.http.post(
      this.direntUrl, 
      JSON.stringify({subdir}), 
      httpOptions
    );
  }
}