import { Component, OnInit } from '@angular/core';
import {Dirent} from '../../models/Dirent';
import {DirentService} from '../../services/dirent.service';


@Component({
  selector: 'app-dirent',
  templateUrl: './dirent.component.html',
  styleUrls: ['./dirent.component.css']
})
export class DirentComponent implements OnInit {
   dirents: Dirent[];

  constructor(private ds:DirentService) { }


  ngOnInit(): void {
   this.ds.getDirent().subscribe(dirents =>{
      this.dirents = dirents;
       console.log(this.dirents);
   });
  
  }
  

}
