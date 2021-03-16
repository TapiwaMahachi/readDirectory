import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {Dirent} from '../models/Dirent';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DirentService {

  direntUrl:string = '/api/directory/client';
  //limit fetch number
  limit ='?_limit=2';

  constructor(private http:HttpClient) { }

  getDirent():Observable<Dirent[]>{

    return this.http.get<Dirent []>(`${this.direntUrl}${this.limit}`);
    
  }
}