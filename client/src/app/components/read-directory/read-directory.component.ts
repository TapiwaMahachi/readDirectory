import { Component, OnInit } from '@angular/core';
import {File} from '../../models/File';

@Component({
  selector: 'app-read-directory',
  templateUrl: './read-directory.component.html',
  styleUrls: ['./read-directory.component.css']
})
export class ReadDirectoryComponent implements OnInit {
  
  files: File[];

  constructor() { }
  

  ngOnInit(): void {
    this.files =[
      {
        fileName: "package.json",
        filePermission: "read and write",
        fileSize: 400,
        fullPath: '/src/package.json',
        createdAt: new Date(),
        isDirectory: false,
        extension: '.json',

      },
      {
        fileName: "package.lock.json",
        filePermission: "read and write",
        fileSize: 400,
        fullPath: '/src/package.lock.json',
        createdAt: new Date(),
        isDirectory: false,
        extension: '.json',

      }
    ]
  }

}
