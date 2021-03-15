import { Component, OnInit, Input } from '@angular/core';
import {File} from '../../models/File';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.css']
})
export class DirectoryItemComponent implements OnInit {

  @Input () file: File;

  constructor() { }

  ngOnInit(): void {
  }

}
