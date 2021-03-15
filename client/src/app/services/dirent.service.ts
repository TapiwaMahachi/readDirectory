import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirentService {

  constructor() { }

  getDirent(){
    return [
      {
        name: "package.json",
        permission: "read and write",
        size: 400,
        path: '/src/package.json',
        createdAt: new Date(),
        isDirectory: true,
        extension: '.json',

      },
      {
        name: "package.lock.json",
        permission: "read and write",
        size: 400,
        path: '/src/package.lock.json',
        createdAt: new Date(),
        isDirectory: false,
        extension: '.json',

      },
       {
        name: "node_modules",
        permission: "read and write",
        size: 400,
        path: '/src/node_modules',
        createdAt: new Date(),
        isDirectory: true,
        extension: '',

      }
    ]
  }
}
